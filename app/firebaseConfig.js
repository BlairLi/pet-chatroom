import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7u9nu8HWHnffnMXeu3TXpukXskoCAUxc",
  authDomain: "pet-chatroom.firebaseapp.com",
  projectId: "pet-chatroom",
  storageBucket: "pet-chatroom.appspot.com",
  messagingSenderId: "229545299506",
  appId: "1:229545299506:web:b1c008f0067f60fa33362b",
  measurementId: "G-XP2TL6NLTL"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export {app, auth}