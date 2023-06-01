import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDL1MIKZMSMgF1miDsHZpNSniPMPkza9AY",
  authDomain: "baby-name-apps-db-69a1f.firebaseapp.com",
  databaseURL: "https://baby-name-apps-db-69a1f.firebaseio.com",
  projectId: "baby-name-apps-db-69a1f",
  storageBucket: "baby-name-apps-db-69a1f.appspot.com",
  messagingSenderId: "686610451085",
  appId: "1:686610451085:web:d13cf2f8e5526658d670c4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;