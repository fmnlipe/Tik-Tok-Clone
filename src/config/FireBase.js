
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyBPfqUcXBrF9xpy06tULZ0B1QNabNj6cBk",
  authDomain: "clone-do-tik-tok.firebaseapp.com",
  projectId: "clone-do-tik-tok",
  storageBucket: "clone-do-tik-tok.appspot.com",
  messagingSenderId: "282669228222",
  appId: "1:282669228222:web:af041dc1e907639a0cbeef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;