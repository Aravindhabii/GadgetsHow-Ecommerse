// import * as firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth";



// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDzzA3bLIY7Hv3BvQy9-4KP76O8WNkwXsM",
    authDomain: "gadgetshow-af0c5.firebaseapp.com",
    projectId: "gadgetshow-af0c5",
    storageBucket: "gadgetshow-af0c5.appspot.com",
    messagingSenderId: "677054906454",
    appId: "1:677054906454:web:4d10b095780eaaa9ed7bf7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
