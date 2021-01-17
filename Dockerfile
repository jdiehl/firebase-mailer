FROM node:alpine
RUN apk update && apk upgrade

WORKDIR /home/node
ENTRYPOINT node dist/

# Install packages
ADD package.json yarn.lock ./
RUN yarn --frozen-lockfile --prod

# Copy source
ADD dist ./dist

ENV FIREBASE_APIKEY=FIREBASE_APIKEY
ENV FIREBASE_PROJECTID=FIREBASE_PROJECTID
ENV FIREBASE_COLLECTION=mailer
ENV MAIL_SENDGRID_API_KEY=MAIL_SENDGRID_API_KEY
ENV MAIL_FROM=MAIL_FROM
