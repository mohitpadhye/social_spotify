const express = require("express")
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/login", (req, res) => {
  const code = req.body.code
  //console.log(req.body.code)
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'c830dd88a7f4488196f3081f0b21efe6',
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
      //console.log(data)
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})
  
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'c830dd88a7f4488196f3081f0b21efe6',
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.listen(3001)
