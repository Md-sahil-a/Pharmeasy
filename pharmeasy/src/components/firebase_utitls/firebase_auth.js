import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOMC9MveSkwcIbtzvvMCYLaO6MCLFSJG8",
  authDomain: "pharmeasy-42f81.firebaseapp.com",
  projectId: "pharmeasy-42f81",
  storageBucket: "pharmeasy-42f81.appspot.com",
  messagingSenderId: "209270924071",
  appId: "1:209270924071:web:9b8461f7c3808df959bf02"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createrUserFromAuth = async (userAuth, additionalData = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userDocRef);
  console.log(snapShot.exists());
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const CreateAuthWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const Signinwithmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
