import React from 'react'

const CountdownItem = ({ type, number }) => {
    return (
        <div className="countdown-item">
            <div className="number-box">
                <p> {number} </p>
                <div className="top-part"></div>
                <div className="bottom-part"></div>
                <div></div>
            </div>
            <p>{type}</p>
        </div>
    )
}

export default CountdownItem