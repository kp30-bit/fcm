importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDzdGt5fyZK5GQVkvj4rtcdq_8u1hUwwYA",
  authDomain: "fcm-react-812a1.firebaseapp.com",
  projectId: "fcm-react-812a1",
  storageBucket: "fcm-react-812a1.appspot.com",
  messagingSenderId: "1067249381530",
  appId: "1:1067249381530:web:a09c23f2a7d4ba9e3bef23"
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

  // self.registration.showNotification(notificationTitle, notificationOptions);
});