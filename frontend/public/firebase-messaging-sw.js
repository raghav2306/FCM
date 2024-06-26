importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCDAIhHGjclQs6GdBk6gq96QxQQfUsEcHA",
  authDomain: "notification-app-86aaf.firebaseapp.com",
  projectId: "notification-app-86aaf",
  storageBucket: "notification-app-86aaf.appspot.com",
  messagingSenderId: "796170691397",
  appId: "1:796170691397:web:2228862b9f6e4137aa942c",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
