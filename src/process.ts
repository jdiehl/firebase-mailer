import { Mailer, MailerLog, MailerStatus } from './Mailer'
import firebase from './firebase'
import send from './send'

const locks: Record<string, boolean> = {}

async function updateStatus(ref: firebase.firestore.DocumentReference<Mailer>, status: MailerStatus, message?: string) {
  const ts = new Date()

  // construct the log
  const log: MailerLog = { ts, status }
  if (message) log.message = message

  // construc the remainder of the update
  const update: Partial<Mailer> = { status }
  if (status === 'sent') update.sentAt = ts

  // update the document
  return ref.update({ ...update, log: firebase.firestore.FieldValue.arrayUnion(log) })
}

export default async function processDocument(ref: firebase.firestore.DocumentReference<Mailer>): Promise<void> {

  // lock this document to ensure that it is not processed multiple times in parallel
  // warning: this does not work across multiple instances of this service
  if (locks[ref.id]) { return }
  locks[ref.id] = true

  // load the document and verify that it is still pending
  const doc = await ref.get()
  const data = doc.data()
  if (!data || data.status !== 'pending') {
    locks[ref.id] = false
    return
  }

  console.log(`Processing ${ref.id}...`)

  // update the document status and log
  updateStatus(ref, 'sending')

  // release the lock
  locks[doc.id] = false

  // send the email
  try {
    await send(data)
  } catch (err) {
    updateStatus(ref, 'failed', err.message)
    return
  }

  // finalize the status
  updateStatus(ref, 'sent')

}
