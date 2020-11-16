import React from 'react'
import './Login.css';
import { Button } from "@material-ui/core"
import { auth, provider } from './firebase';


function Login() {

    const signIn = () =>{
    // do clever google login...
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">

        <div className="login__logo">
            <img src="https://www.pngkit.com/png/full/19-191133_discord-logo-png-transparent-graphic-discord.png" alt="discord"  />

        </div>
        <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
