import React from 'react'
import utils from '../utils'


const DateForm = ({ handleDateChange }) => (
    <div className="date-form">
        <h1>Set date for countdown</h1>
        <input 
            type="date" 
            onChange={handleDateChange} 
            onKeyDown={(e) => e.preventDefault()}
            name="dateChange"
            defaultValue={utils.defaultDateString()}
            min={utils.minDate()}
            max={utils.maxDate()}
        />
    </div>
)

export default DateForm