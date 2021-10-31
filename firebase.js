// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDg2AKOfj8sYuKfV6mLYuQlYL6AP_-XPKA',
  authDomain: 'instagram-a041c.firebaseapp.com',
  projectId: 'instagram-a041c',
  storageBucket: 'instagram-a041c.appspot.com',
  messagingSenderId: '775474490750',
  appId: '1:775474490750:web:1af4fd1a11e8968465d72f',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
