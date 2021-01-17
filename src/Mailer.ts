export type MailerStatus = 'pending' | 'sending' | 'failed' | 'sent'

export interface MailerContent {
  to: string
  subject: string
  text: string
  html?: string
}

export interface MailerLog {
  ts: Date
  status: MailerStatus
  message?: string
}

export interface Mailer {
  createdAt: Date
  sentAt?: Date
  status: MailerStatus
  content: MailerContent
  log?: MailerLog[]
}
