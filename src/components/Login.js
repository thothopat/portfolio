import React, { useState, useEffect } from 'react';
import firebaseApp from "../config/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Login = () => {
	const auth = getAuth(firebaseApp);
	/*onAuthStateChanged(auth, user => {
	  // Check for user status
	});*/
	const signUp = () => {
		createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    // ...
	  	}).catch((error) => {
	    	const errorCode = error.code;
	    	const errorMessage = error.message;
	    	// ..
	  	});
	}
	const signIn = () => {
		signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
	    	// Signed in 
	    	const user = userCredential.user;
	    	// ...
	  	}).catch((error) => {
	    	const errorCode = error.code;
	    	const errorMessage = error.message;
	  	});
	}
	return (
		<>
			<button onclick={signUp}>Sign Up</button>
			<button onclick={signIn}>Sign In</button>
		</>
	);
}

export default Login;