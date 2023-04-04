// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVpTCO_Ed8wqSrkuaTi4HyHFRqxgkMiuw",
  authDomain: "realfacebook-76fe4.firebaseapp.com",
  projectId: "realfacebook-76fe4",
  storageBucket: "realfacebook-76fe4.appspot.com",
  messagingSenderId: "885269216491",
  appId: "1:885269216491:web:73259811a136cc691312ae",
  measurementId: "G-1BYENM8B1N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//++++++++++++++++++++++++
//const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
