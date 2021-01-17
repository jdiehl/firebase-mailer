import firebase from './firebase'
import { Mailer } from './Mailer'
import processDocument from './process'
import { firebaseConfig, collection } from './config'

/* eslint-disable @typescript-eslint/no-var-requires*/
const pkg = require('../package.json')

export default function main(): void {

  // subscribe to firestore docs
  firebase.firestore()
  .collection(collection)
  .where('status', '==', 'pending')
  .onSnapshot(snapshot => {
    for (const doc of snapshot.docs) {
      processDocument(doc.ref as firebase.firestore.DocumentReference<Mailer>)
    }
  })

  console.log(`${pkg.name} (v${pkg.version}) conntected to project ${firebaseConfig.projectId}.`)

}
