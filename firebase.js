// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCK5nb6u2CGRJ8AB1aPlRn54b97bdeAFeM",
    authDomain: "inventariopv-643f1.firebaseapp.com",
    projectId: "inventariopv-643f1",
    storageBucket: "inventariopv-643f1.appspot.com",
    messagingSenderId: "96242533231",
    appId: "1:96242533231:web:56f5d3401b4cb77a52c78d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
