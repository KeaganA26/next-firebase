import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTTYGJ3ReHowDwWP-nVu3xXLiI8eaG1L8",
  authDomain: "shared-calender-92f3c.firebaseapp.com",
  projectId: "shared-calender-92f3c",
  storageBucket: "shared-calender-92f3c.appspot.com",
  messagingSenderId: "580507853418",
  appId: "1:580507853418:web:f4cc80af00982f53f86013",
  measurementId: "G-D98MD424E8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
