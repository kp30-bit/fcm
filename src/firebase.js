import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: "AIzaSyDzdGt5fyZK5GQVkvj4rtcdq_8u1hUwwYA",
  authDomain: "fcm-react-812a1.firebaseapp.com",
  projectId: "fcm-react-812a1",
  storageBucket: "fcm-react-812a1.appspot.com",
  messagingSenderId: "1067249381530",
  appId: "1:1067249381530:web:a09c23f2a7d4ba9e3bef23"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);