import React, { useState, useEffect } from 'react'
import CountdownItem from './CountdownItem'

const Countdown = ({ year }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const calculateTimeLeft = () => {
        const currentDate = new Date()
        const year = currentDate.getFullYear()
        // Vappu is on the first of May
        const difference = +new Date(`5/01/${year}`) - +currentDate
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

    useEffect(() => {
        const interval = setInterval(() => {
            calculateTimeLeft()
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        timeLeft ? 
        <div className="countdown">
            <CountdownItem type="DAYS" number={timeLeft.days} />
            <CountdownItem type="HOURS" number={timeLeft.hours} />
            <CountdownItem type="MINUTES" number={timeLeft.minutes} />
            <CountdownItem type="SECONDS" number={timeLeft.seconds} />
        </div>
        : 
        <div className="countdown"></div>
    )
}

export default Countdown