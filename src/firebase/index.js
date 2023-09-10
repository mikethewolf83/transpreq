import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDcUJf89sZdDh3UaFixq_yGhJ_YtBDLoq8',
  authDomain: 'transpreq-data.firebaseapp.com',
  projectId: 'transpreq-data',
  storageBucket: 'transpreq-data.appspot.com',
  messagingSenderId: '163722423964',
  appId: '1:163722423964:web:8b55409607a2b158834759'
}


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
  db
}