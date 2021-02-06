import React, { useState, useEffect } from 'react'
import CountdownItem from './CountdownItem'

const Countdown = () => {
    const [initialTime, setIntialTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            
        })
    }, [])

    return (
        <div>
            <CountdownItem type="DAYS" number={1} />
            <CountdownItem type="HOURS" number={1} />
            <CountdownItem type="MINUTES" number={1} />
            <CountdownItem type="SECONDS" number={1} />
        </div>
    )
}

export default Countdown