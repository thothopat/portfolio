import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBy3QIpTehsmMMUyBORL8GXUz7rwcBtCiA",
  authDomain: "portfolio-79991.firebaseapp.com",
  projectId: "portfolio-79991",
  storageBucket: "portfolio-79991.appspot.com",
  messagingSenderId: "918508311562",
  appId: "1:918508311562:web:5739c70c85b339d4917bf3",
  measurementId: "G-J6ZLBYVB3B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();

export default { db, auth, provider };