import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp({ });
} else {
    firebase.app(); // if already initialized, use that one
}
const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState('');
    let { from } = location.state || { from: { pathname: "/"}};
    const handelGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL}
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from); 
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <div className="container">
            <div className="text-center">
                <button onClick={handelGoogleSignIn} className="btn btn-primary m-5">Continue with Google</button>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Login;