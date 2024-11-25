import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUa_HVV_x0W8Ww7SmNZXcA49-pYTSBOLc",
    authDomain: "task-manager-f72a4.firebaseapp.com",
    projectId: "task-manager-f72a4",
    storageBucket: "task-manager-f72a4.firebasestorage.app",
    messagingSenderId: "567921699377",
    appId: "1:567921699377:web:cfc83396123f054cd78310",
    measurementId: "G-4K1D5S15Y7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 