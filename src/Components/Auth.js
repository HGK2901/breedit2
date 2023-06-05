import React from 'react';
import firebase from 'firebase/app' ;
import 'firebase/firestore' ;
import 'firebase/auth' ;
import { useAuthState } from 'react-firebase-hooks/auth' ;
import { useCollectionData } from 'react-firebase-hooks/firestore' ;
import Onboarding from './OnBoarding';
import Login from '../Pages/Login';

firebase.initializeApp({
    apiKey: "AIzaSyCBtKwQfUtmH46O8MFaimbuqvIOMM7f0PY",
    authDomain: "breedit-e5c6c.firebaseapp.com",
    projectId: "breedit-e5c6c",
    storageBucket: "breedit-e5c6c.appspot.com",
    messagingSenderId: "876232299247",
    appId: "1:876232299247:web:babe4c93c045aab788811a",
    measurementId: "G-P54V14VRF3"
})

const auth = firebase.auth();
const analytics = firebase.analytics();
const firestore = firebase.firestore();

const UserAuth= () => {

    
    const [user] = useAuthState(auth);
  
    return (
        <>  
        <section>
            {user ? <Onboarding /> : <Login />}
        </section>
        </>
    )
    
      
}
function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  


export default UserAuth;







