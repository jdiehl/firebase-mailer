# Firebase Mailer

Node service that watches a firestore collection and sends emails automatically.

## Firebase Collection

The firebase collection must be set up as following:

```json
{
  "status": "pending",
  "content": {
    "to": "recipient@email",
    "subject": "subject line",
    "text": "text message",
    "html": "optional html message"
  }
}
```

The status will be updated by the service to `sending` and finally `sent` or `failed`. In addition a `log` will be added to the document reflecting the 

## Configuration

Configuration is handled with the following environment variables:

* `FIREBASE_APIKEY`: Your firebase api key
* `FIREBASE_PROJECTID`: Your firebase project id
* `FIREBASE_COLLECTION`: The firestore collection to watch
* `MAIL_SENDGRID_API_KEY`: Your sendgrid api key (currently only sendgrid is supported)
* `MAIL_FROM`: The default sender email-address to use for your mails
```
