import React from 'react'
import './index.scss'
import Countdown from './components/Countdown'


const App = () => {

  // Calculate if vappu is this or next year and pass it to the Countdown component
  const getYearForWappu = () => {
    const currentDate = new Date()
    if (currentDate.getMonth() < 5) {
      return currentDate.getFullYear()
    }
    return currentDate.getFullYear() + 1
  }

  return (
    <div className="container">
      <h1>WAPPULASKURI</h1>
      <Countdown year={getYearForWappu()}/>
      <div className="hills"></div>
    </div>
  )
}

export default App
