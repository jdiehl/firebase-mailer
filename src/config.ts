export const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY!,
  projectId: process.env.FIREBASE_PROJECTID!
}

export const collection = process.env.FIREBASE_COLLECTION!

export const sendgridConfig = {
  apiKey: process.env.MAIL_SENDGRID_API_KEY!
}

export const from = process.env.MAIL_FROM!
