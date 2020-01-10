import React from 'react'

import {Navbar} from './components'
import Weather from './components/weather'
import Nasa from './components/nasa'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Nasa />
      <Weather />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
