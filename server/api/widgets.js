const router = require('express').Router()
const axios = require('axios')
const requestIp = require('request-ip')
module.exports = router

router.use('/weather', async (req, res, next) => {
  try {
    const apikey = process.env.WEATHER_API_KEY
    const params = {
      apikey,
      lat: req.body.lat,
      lon: req.body.lon,
      units: 'metric'
    }
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather`,
      {params}
    )
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use('/nasa', async (req, res, next) => {
  try {
    const api_key = process.env.NASA_API_KEY
    const {data} = await axios.get(`https://api.nasa.gov/planetary/apod`, {
      params: {api_key}
    })
    res.json(data)
  } catch (error) {
    next(error)
  }
})
