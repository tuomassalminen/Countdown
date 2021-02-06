import React from 'react'

const CountdownItem = ({ type, number }) => {

    const getClassName = () => {
        if (type !== 'SECONDS') {
            return "countdown-item"
        } 
        return "countdown-item last-item"
    }

    const formattedNumber = () => {
        return number < 10 ? `0${number}` : number
    }

    return (
        <div className={getClassName()}>
            <div className="number-box">
                <p className="number"> {formattedNumber()} </p>
                <div className="top-part"></div>
                <div className="bottom-part"></div>
            </div>
            <p className="type-text">{type}</p>
        </div>
    )
}

export default CountdownItem