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
