import { createTransport } from 'nodemailer'
import { Mailer } from './Mailer'
import { from, sendgridConfig } from './config'

const nodemailerSendgrid = require('nodemailer-sendgrid')

// setup transport
const options = nodemailerSendgrid(sendgridConfig)
const transport = createTransport(options)

export default async function send(data: Mailer): Promise<void> {
  const { content } = data
  if (!content.to) throw new Error(`Invalid content: missing to`)
  if (!content.subject) throw new Error(`Invalid content: missing subject`)
  if (!content.text) throw new Error(`Invalid content: missing text`)

  console.log(`Sending to ${content.to}: ${content.subject}`)

  await transport.sendMail({
    from,
    ...data.content
  })
}
