import firebase from 'firebase/app';
import 'firebase/messaging';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDzdGt5fyZK5GQVkvj4rtcdq_8u1hUwwYA",
  authDomain: "fcm-react-812a1.firebaseapp.com",
  projectId: "fcm-react-812a1",
  storageBucket: "fcm-react-812a1.appspot.com",
  messagingSenderId: "1067249381530",
  appId: "1:1067249381530:web:a09c23f2a7d4ba9e3bef23"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
export const getToken = async (setTokenFound) => {
    let currentToken = '';
    try {
      currentToken = await messaging.getToken({validKey: publicKey});
      if (currentToken) {
        setTokenFound(true);
      } else {
        setTokenFound(false);
      }
    } catch (error) {
      console.log('An error occurred while retrieving token.', error);
    }
    return currentToken;
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
const publicKey = "BLH_NZHEf4pAj3_lzCqSr3fXU9_ytxMcKRPH6H8lM1uXI4LSAwqIlnKWVvokJ1V4W1CmI2tqqJRkj0s1GW-9Ir0";