// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtciDWShOVNNYmHDy5cOOvfbnNBlgH_pU",
  authDomain: "final-simple-firebase.firebaseapp.com",
  projectId: "final-simple-firebase",
  storageBucket: "final-simple-firebase.firebasestorage.app",
  messagingSenderId: "778766059370",
  appId: "1:778766059370:web:d996f2dfdee806fd934713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;