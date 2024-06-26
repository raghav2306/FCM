import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCDAIhHGjclQs6GdBk6gq96QxQQfUsEcHA",
  authDomain: "notification-app-86aaf.firebaseapp.com",
  projectId: "notification-app-86aaf",
  storageBucket: "notification-app-86aaf.appspot.com",
  messagingSenderId: "796170691397",
  appId: "1:796170691397:web:2228862b9f6e4137aa942c",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
