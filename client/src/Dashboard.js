import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: 'c830dd88a7f4488196f3081f0b21efe6',
})
console.log("hey there. this is frustrating")
export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])
    console.log(accessToken)
    return (
        <div> {code} </div>
    )
}
