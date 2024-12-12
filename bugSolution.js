// bugSolution.js

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, query, where, getDocs, enablePersistence } from "firebase/firestore";

// ...Firebase config...
const firebaseConfig = {
  // ...your config...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable offline persistence
await enablePersistence(db, {
  synchronizeTabs: true
});

const collectionRef = collection(db, 'yourCollection');
const q = query(collectionRef, where('...', '==', '...')); // Add your query if needed

const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New city: ', change.doc.data());
    } else if (change.type === 'modified') {
      console.log('Modified city: ', change.doc.data());
    } else if (change.type === 'removed') {
      console.log('Removed city: ', change.doc.data());
    }
  });
}, (error) => {
  console.error("Error listening for changes: ", error);
});

// ... rest of your code ...