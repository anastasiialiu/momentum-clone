import React from 'react'
import {connect} from 'react-redux'
import {getNasaImage} from '../store/widgets'

class Nasa extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getImage()
  }

  render() {
    const backgroundImgUrl = {
      backgroundImage: `url(${this.props.image})`
    }
    console.log('Nasa:', this.props)
    return <div id="nasaBackgroundImage" style={backgroundImgUrl} />
  }
}

const mapState = state => ({
  image: state.widgets.backgroundImage
})

const mapDispatch = dispatch => ({
  getImage: () => {
    dispatch(getNasaImage())
  }
})

export default connect(mapState, mapDispatch)(Nasa)
