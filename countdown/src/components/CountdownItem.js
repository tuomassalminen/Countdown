import React, { useEffect, useState } from 'react'

const CountdownItem = ({ type, number }) => {
    const [animationFinished, setAnimationFinished] = useState(true)

    const getAnimationClassName = (className, isFinished, animationType) => {
        return `${className} ${isFinished ? '' : animationType}`
    }

    useEffect(() => {
        const doFlipAnimation = () => {
            setAnimationFinished(!animationFinished)
        }
        doFlipAnimation()
    }, [number])


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
                <div 
                    className={getAnimationClassName('flipping-part', animationFinished, 'flip')}
                    onAnimationEnd={() => setAnimationFinished(true)}
                    onAnimationStart={() => setAnimationFinished(false)}
                >
                    <div className="flipping-top"></div>
                    <div 
                        className={getAnimationClassName('flipping-bottom', animationFinished, 'changeColor')}
                        onAnimationEnd={() => setAnimationFinished(true)}
                        onAnimationStart={() => setAnimationFinished(false)}
                    >
                    </div>
                </div>
            </div>
            <p className="type-text">{type}</p>
        </div>
    )
}

export default CountdownItem