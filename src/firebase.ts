import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from './config'

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
