//The reason we do 'firebase/app' is because firebase has all of utility libraries loaded when we included the entire dependecy when we installed firebase with 'yarn',but we don't want any that we're not using they are quite large.
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyAGbR36zhNCaW-phojzlpvlDmoi2iy5Ku0",
    authDomain: "crwn-db-b9d89.firebaseapp.com",
    databaseURL: "https://crwn-db-b9d89.firebaseio.com",
    projectId: "crwn-db-b9d89",
    storageBucket: "crwn-db-b9d89.appspot.com",
    messagingSenderId: "754147785436",
    appId: "1:754147785436:web:aa621abf6dfd63860a5219",
    measurementId: "G-TSMXNVW06G"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// It gives us access to this new Google auth provider from the autentification library.
const provider = new firebase.auth.GoogleAuthProvider();
// It means we want to always trigger the Google pop up whenever we use this Google auth provider for authentication and sign.
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

