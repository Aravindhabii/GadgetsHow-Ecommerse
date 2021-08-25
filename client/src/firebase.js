import * as firebase from 'firebase'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvcU1e79CQknVopOVgmhDYenwSKFkpOEg",
  authDomain: "gadgetshow-c2ad9.firebaseapp.com",
  projectId: "gadgetshow-c2ad9",
  storageBucket: "gadgetshow-c2ad9.appspot.com",
  messagingSenderId: "330134280012",
  appId: "1:330134280012:web:71620f4ef22fe412e221e9",
  measurementId: "G-03B1414R1R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
