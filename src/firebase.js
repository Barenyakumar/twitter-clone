// import firebase from "firebase";
// import firebase from 'firebase/app'
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkTbzqCTmT_N6nKkRpvE5CH5d_ZrAlwiM",
    authDomain: "twitter-clone-adbf8.firebaseapp.com",
    projectId: "twitter-clone-adbf8",
    storageBucket: "twitter-clone-adbf8.appspot.com",
    messagingSenderId: "833766358017",
    appId: "1:833766358017:web:638317af86aa6913c69400",
    measurementId: "G-2LD63M3H2J"
  };

  
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);

export {auth,provider,storage};
  export default db;