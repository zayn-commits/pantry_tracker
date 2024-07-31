// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdli2pE5dmtBgTe2A7Bg1GfToYOL1wmE4",
  authDomain: "pantry-tracker-cfc1f.firebaseapp.com",
  projectId: "pantry-tracker-cfc1f",
  storageBucket: "pantry-tracker-cfc1f.appspot.com",
  messagingSenderId: "516574825829",
  appId: "1:516574825829:web:2d0b34b82ccda4706a658c",
  measurementId: "G-JMWVLBW2FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}