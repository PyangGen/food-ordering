import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCerRbS0lKK7yzfssawoWQ7xyoqhe3VWdE",
  authDomain: "orderingpizza-8dd3f.firebaseapp.com",
  databaseURL: "https://orderingpizza-8dd3f-default-rtdb.firebaseio.com",
  projectId: "orderingpizza-8dd3f",
  storageBucket: "orderingpizza-8dd3f.appspot.com",
  messagingSenderId: "980043693935",
  appId: "1:980043693935:web:339e9b996d87262860b29a",
};

  const app = getApp.Length > 0 ? getApps() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };


  

