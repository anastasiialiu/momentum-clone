import React from 'react'

import {Navbar} from './components'
import Weather from './components/weather'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Weather />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
