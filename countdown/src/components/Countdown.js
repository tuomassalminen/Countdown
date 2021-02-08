import React, { useState, useEffect } from 'react'
import CountdownItem from './CountdownItem'


const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    
    useEffect(() => {
        const calculateTimeLeft = () => {
            const currentDate = new Date()
            // Vappu is on the first of May
            const difference = +targetDate - +currentDate
            let newTimeLeft = {}
    
            if (difference > 0) {
                newTimeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                 }
            } else {
                newTimeLeft = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
            }
            setTimeLeft(newTimeLeft)
        }
        const interval = setInterval(() => {
            calculateTimeLeft()
        }, 1000)
        return () => clearInterval(interval)
    }, [targetDate])

   

    return (
        <div className="countdown">
            <CountdownItem type="DAYS" number={timeLeft.days} />
            <CountdownItem type="HOURS" number={timeLeft.hours} />
            <CountdownItem type="MINUTES" number={timeLeft.minutes} />
            <CountdownItem type="SECONDS" number={timeLeft.seconds} />
            <div className="hills"></div>

        </div>
    )
}

export default Countdown