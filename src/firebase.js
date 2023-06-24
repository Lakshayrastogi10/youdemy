import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCb62gPjOi_Y7i2-LpX3X_drqheAttdOrQ",
  authDomain: "youdemy-ee298.firebaseapp.com",
  projectId: "youdemy-ee298",
  storageBucket: "youdemy-ee298.appspot.com",
  messagingSenderId: "874253664530",
  appId: "1:874253664530:web:3cf8e27cf519c9c7b0f3cb",
  measurementId: "G-1H782M5GKH",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };

export default firebase;
export const auth = firebase.auth();
