import axios from 'axios'

// action types
const GOT_GEOLOCATION = 'GOT_GEOLOCATION'
const GOT_WEATHER = 'GOT_WEATHER'
const GOT_NASA_IMAGE = 'GOT_NASA_IMAGE'

// action creator
export const gotGeolocation = geolocation => ({
  type: GOT_GEOLOCATION,
  geolocation
})

export const gotWeather = weather => ({
  type: GOT_WEATHER,
  weather
})

export const gotNasaImage = image => ({
  type: GOT_NASA_IMAGE,
  image
})

export const getWeather = coordinates => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/widgets/weather', coordinates)
      console.log('getWeather thunk creator:', data)
      const temperature = data.main.temp
      const county = data.name
      dispatch(gotWeather({temperature, county}))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getNasaImage = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/widgets/nasa')
      // console.log("data", data.url)
      dispatch(gotNasaImage(data.url))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {
  geolocation: {},
  weather: '',
  backgroundImage: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_GEOLOCATION:
      return {...state, geolocation: action.geolocation}
    case GOT_WEATHER:
      return {...state, weather: action.weather}
    case GOT_NASA_IMAGE:
      return {...state, backgroundImage: action.image}
    default:
      return state
  }
}

export default reducer
