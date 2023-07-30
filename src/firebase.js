// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCCRiuFy0BANfNpPVmhx-5u3iG_mdXy-Xo",
  authDomain: "sistema-solar-565a0.firebaseapp.com",
  projectId: "sistema-solar-565a0",
  storageBucket: "sistema-solar-565a0.appspot.com",
  messagingSenderId: "170124768923",
  appId: "1:170124768923:web:0d80a5cfed258b4853783e",
  measurementId: "G-TM31ZVNP01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;