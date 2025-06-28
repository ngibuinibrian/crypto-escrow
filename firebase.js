// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYxRViGSid26S7yzVJuaPfIW7V6fuvF18",
  authDomain: "cryptoescrow.firebaseapp.com",
  projectId: "cryptoescrow",
  storageBucket: "cryptoescrow.firebasestorage.app",
  messagingSenderId: "883185350841",
  appId: "1:883185350841:web:4c795a614d8feefb804368"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, updateDoc, doc };
