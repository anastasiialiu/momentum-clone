import React from 'react'
import {connect} from 'react-redux'
import {gotGeolocation, getWeather} from '../store/widgets'

class Weather extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    this.geolocate()
  }

  geolocate() {
    if (window.navigator && window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.onGeolocateSuccess,
        this.onGeolocateError
      )
    }
  }

  onGeolocateSuccess = coordinates => {
    const {latitude, longitude} = coordinates.coords
    console.log('Found coordinates: ', `${latitude}, ${longitude}`, coordinates)
    this.props.getWeather({lat: latitude, lon: longitude})
  }

  onGeolocateError = error => {
    console.warn(error.code, error.message)
  }

  render() {
    console.log('Weather:', this.props)
    return (
      <div>
        <div>{this.props.geolocation.latitude || 'Location Not Found'}</div>
        <div>{this.props.weather.temperature || 'Temperature Not Found'}</div>
        <div>{this.props.weather.county || 'Weather Not Found'}</div>
      </div>
    )
  }
}

const mapState = state => ({
  weather: state.widgets.weather,
  geolocation: state.widgets.geolocation
})

const mapDispatch = dispatch => ({
  getWeather: coordinates => {
    dispatch(getWeather(coordinates))
  }
})

export default connect(mapState, mapDispatch)(Weather)
