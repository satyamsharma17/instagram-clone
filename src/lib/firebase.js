import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBlGvGijciFxA8axT8JMFcqoZ3SzKa2__k',
  authDomain: 'instagram-20f6d.firebaseapp.com',
  projectId: 'instagram-20f6d',
  storageBucket: 'instagram-20f6d.appspot.com',
  messagingSenderId: '515152198553',
  appId: '1:515152198553:web:2e6c15d9174dc98c85f108',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase);

export { firebase, FieldValue };
