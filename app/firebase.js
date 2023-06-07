import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgOTTmLa1WMSVJzwZxuodOo4KbT2OgWPw",
  authDomain: "kuis2rizqita.firebaseapp.com",
  databaseURL: "https://kuis2rizqita-default-rtdb.firebaseio.com",
  projectId: "kuis2rizqita",
  storageBucket: "kuis2rizqita.appspot.com",
  messagingSenderId: "559915315853",
  appId: "1:559915315853:web:85f613c5ced21ac53b28c4",
  measurementId: "G-QYQMWCBQSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};
