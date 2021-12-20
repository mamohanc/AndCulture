import React from 'react'
import { Provider } from './Context'
import Routes from './Routes'

const App = () => {
  return (
    <>
    <Provider>

      <Routes/>
    </Provider>
    </>
  )
}

export default App
