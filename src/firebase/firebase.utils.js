import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDzXHFFiDnq74VaMxIOgnHelUFlJyiDYHw",
    authDomain: "crww-db.firebaseapp.com",
    databaseURL: "https://crww-db.firebaseio.com",
    projectId: "crww-db",
    storageBucket: "crww-db.appspot.com",
    messagingSenderId: "279150846499",
    appId: "1:279150846499:web:40eef5e320a2ff93c90796",
    measurementId: "G-PNPFDM9WT4"
  };


  export const createUserProfileDocument=async(userAuth,additionalData)=>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapshot = await userRef.get()

      if(!snapshot.exists){
        const { displayName, email } = userAuth;

        const createdAt = new Date()

        try{

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log('error creating user', error.message )
        }
      }
      return userRef
  }


  firebase.initializeApp(config)


  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;

 