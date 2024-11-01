import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC64eYSxskOwQOMEZZ6gY5lheG_RIYbfRQ",
  authDomain: "contact-app-88a6c.firebaseapp.com",
  projectId: "contact-app-88a6c",
  storageBucket: "contact-app-88a6c.appspot.com",
  messagingSenderId: "284913785500",
  appId: "1:284913785500:web:6b96d4c43e117525cdab59",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
