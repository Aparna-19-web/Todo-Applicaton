import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCsnQysLR6URH9GfoY6ary1WiJrWeUZ4mk",
  authDomain: "todoapp-d9a93.firebaseapp.com",
  projectId: "todoapp-d9a93",
  storageBucket: "todoapp-d9a93.appspot.com",
  messagingSenderId: "621762300465",
  appId: "1:621762300465:web:beaf34491ca737ce83a310"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();