// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAnhnTRPDsW2hBgmIy3ZRo6kXC__1RNSpU',
  authDomain: 'todo-list-deveza-b5684.firebaseapp.com',
  projectId: 'todo-list-deveza-b5684',
  storageBucket: 'todo-list-deveza-b5684.appspot.com',
  messagingSenderId: '1078731420347',
  appId: '1:1078731420347:web:6deee4c85e0a130cd1af9e',
  measurementId: 'G-6N6G5K6WC8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
