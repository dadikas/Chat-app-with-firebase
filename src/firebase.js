import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2-3cRX-OiaMV6cGChZ7Gj5kTFbGahAJ0",
  authDomain: "chatweb-47067.firebaseapp.com",
  projectId: "chatweb-47067",
  storageBucket: "chatweb-47067.appspot.com",
  messagingSenderId: "115377068151",
  appId: "1:115377068151:web:8e42e84e656ad0c55c4e72",
  measurementId: "G-MLL29633RD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
