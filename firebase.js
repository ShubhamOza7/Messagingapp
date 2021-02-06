import * as firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAg6jVB3i0jJ2JjHTSflG6fiby3roklN3k",
    authDomain: "message-app-3ba9e.firebaseapp.com",
    projectId: "message-app-3ba9e",
    storageBucket: "message-app-3ba9e.appspot.com",
    messagingSenderId: "1008210773870",
    appId: "1:1008210773870:web:ac0292cf7881f72abb637f"
  };

let app;

if(firebase.apps.length === 0 ){
  app = firebase.initializeApp(firebaseConfig)
} else {
    app=firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};
