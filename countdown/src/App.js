import React, { useState } from 'react'
import './index.scss'
import Countdown from './components/Countdown'
import DateForm from './components/DateForm'


const App = () => {
  const [targetDate, setTargetDate] = useState(new Date())

  const handleDateChange = (event) => {
    event.preventDefault()
    const date = event.target.value
    const maxYear = String(new Date().getFullYear() + 1)
    const minYear = String(new Date().getFullYear())
    const submittedYear = date.slice(0, 4)
    if (submittedYear.localeCompare(maxYear) !== 0 && submittedYear.localeCompare(minYear) !== 0 ) {
      window.alert('Can only choose dates from this or next year')
      return
    }
    setTargetDate(new Date(date))
  }

  return (
    <div className="container">
      <DateForm handleDateChange={handleDateChange}/>
      <Countdown targetDate={targetDate}/>
      <div className="hills"></div>
    </div>
  )
}

export default App
