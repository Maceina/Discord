import React from 'react'
import './Login.css';
import { Button } from "@material-ui/core"


function Login() {

    const signIn = () =>{
    // do clever google login...
    };

    return (
        <div className="login">
            <h2>I am the login page</h2>

        <div className="login__logo">
            <img src="https://www.pngkit.com/png/full/19-191133_discord-logo-png-transparent-graphic-discord.png" alt="discord"  />

        </div>
        <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
