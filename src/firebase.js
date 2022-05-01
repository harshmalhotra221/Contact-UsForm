import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8cAy2inA68h32W02Zja34G-ylt0r3FZM",
  authDomain: "contactus-f19c3.firebaseapp.com",
  projectId: "contactus-f19c3",
  storageBucket: "contactus-f19c3.appspot.com",
  messagingSenderId: "917819189787",
  appId: "1:917819189787:web:cf2bbd0c0986b1134d26be"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    contacts : firestore.collection('contacts'),
    name     : firestore.collection('name'),
    email    : firestore.collection('email'),
    topic    : firestore.collection('topic'),
    message  : firestore.collection('message'),
    // getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()