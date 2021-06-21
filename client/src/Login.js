import React from 'react'
import './styles/LoginStyles.css'
// import { FaSpotify } from 'react-icons/fa'

const authEndpoint = 'https://accounts.spotify.com/authorize'

const scopes = [
    'user-read-private',
    'user-read-recently-played',
    'user-read-playback-state',
]

const clientId = 'c830dd88a7f4488196f3081f0b21efe6'
const redirectUri = 'http://localhost:3000'

const AUTH_URL = `${authEndpoint}?client_id=${clientId}&&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}`

export default function Login() {
    return (
        <div className="login_section">
            <h1>
                Welcome to LinkMe
            </h1>
            <p>
                This is the premier social media app for us music junkies. Connect, listen, and expand your music taste from the likes of other users. <br/><br/>
                How to use this application: Press the button below to authenticate your spotify account.
                From there, you'll be taken to your home page where you can see what the world is listening to !
            </p>
            <a href={AUTH_URL}>
                Login With Spotify
            </a>
        </div>
    )
}
