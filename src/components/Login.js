import React, { useState, useEffect } from 'react';
import { auth, provider } from "../config/Firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
	 let navigate = useNavigate();
	
	const signInWithGoogle = () => {
    	signInWithPopup(auth, provider).then((result) => {
    		const credential = provider.credentialFromResult(result);
    		const token = credential.accessToken;
    		// The signed-in user info.
    		const user = result.user;
    		console.log('credential ',credential,' token ',token,' user ',user)
		    localStorage.setItem("isAuth", true);
		    setIsAuth(true);
		    navigate("/");
    	})
    	.catch((error) => {
    		// Handle Errors here.
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // The email of the user's account used.
		    const email = error.customData.email;
		    // The AuthCredential type that was used.
		    const credential = provider.credentialFromError(error);
		    console.log('errorCode ',errorCode,' errorMessage ',errorMessage,' email ', email, ' credential ',credential)
    	});
  	};
	return (
		<button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900" onClick={signInWithGoogle}>
          <i className="fa fa-google mr-2"></i>Sign In
        </button>
	);
}

export default Login;