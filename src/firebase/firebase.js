import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD99TraGuo97NBqTl1W2SjnHEZZCV91Pgw",
    authDomain: "to-do-app-1a2e1.firebaseapp.com",
    projectId: "to-do-app-1a2e1",
    storageBucket: "to-do-app-1a2e1.appspot.com",
    messagingSenderId: "213981981802",
    appId: "1:213981981802:web:5535b7b7bd41897b986e13",
    measurementId: "G-BJW0Y4STKB"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
