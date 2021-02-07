const minDate = () => {
    const currentYear = new Date().getFullYear()
    return `${currentYear}-01-01`
}

const maxDate = () => {
    const nextYear = new Date().getFullYear() + 1
    return `${nextYear}-12-31`
}

const defaultDateString = () => {
    const date = new Date()
    const month = () => date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const day = () => date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    return `${date.getFullYear()}-${month()}-${day()}`
}

const utils = {
    minDate,
    maxDate,
    defaultDateString
}

export default utils