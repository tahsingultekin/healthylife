import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcL2MGW9kb_b7l_O2Dy-Qbihg82hl4Eg4",
  authDomain: "fitnes-e570e.firebaseapp.com",
  projectId: "fitnes-e570e",
  storageBucket: "fitnes-e570e.appspot.com",
  messagingSenderId: "920721143010",
  appId: "1:920721143010:web:1c1e16130f5321bbc8dabb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
