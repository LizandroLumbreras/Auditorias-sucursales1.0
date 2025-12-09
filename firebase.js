// SDK COMPAT (para trabajar correctamente con el SW y FCM)
import "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js";
import "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js";

firebase.initializeApp({
  apiKey: "AIzaSyCK5nb6u2CGRJ8AB1aPlRn54b97bdeAFeM",
  authDomain: "inventariopv-643f1.firebaseapp.com",
  projectId: "inventariopv-643f1",
  storageBucket: "inventariopv-643f1.firebasestorage.app",
  messagingSenderId: "96242533231",
  appId: "1:96242533231:web:aae75a18fbaf9840529e9a"
});

// Firestore
export const db = firebase.firestore();

// Messaging
export const messaging = firebase.messaging();
