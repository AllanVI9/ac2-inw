// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUUJeNk3UyBQWB8qWXjmWxAwBijX0o4fI",
    authDomain: "projeto-fc1c3.firebaseapp.com",
    projectId: "projeto-fc1c3",
    storageBucket: "projeto-fc1c3.appspot.com",
    messagingSenderId: "756274646756",
    appId: "1:756274646756:web:a8702a0a55a0a4770b66f1",
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);