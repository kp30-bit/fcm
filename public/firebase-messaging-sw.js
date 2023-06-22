importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
export const firebaseConfig = {
  apiKey: "AIzaSyDzdGt5fyZK5GQVkvj4rtcdq_8u1hUwwYA",
  authDomain: "fcm-react-812a1.firebaseapp.com",
  projectId: "fcm-react-812a1",
  storageBucket: "fcm-react-812a1.appspot.com",
  messagingSenderId: "1067249381530",
  appId: "1:1067249381530:web:a09c23f2a7d4ba9e3bef23"
};
onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));
firebase.initializeApp(firebaseConfig);