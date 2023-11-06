// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAgenxZClBiIeXTHpdUvd3jWxCT9qEhZS0",
  authDomain: "auth-5769a.firebaseapp.com",
  projectId: "auth-5769a",
  storageBucket: "auth-5769a.appspot.com",
  messagingSenderId: "555590030696",
  appId: "1:555590030696:web:02439778db3a3a3ba172dd"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export default app;