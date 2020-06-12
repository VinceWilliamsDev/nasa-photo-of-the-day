import React from "react"

const Info = (props) => {
    const {nasaData} = props
    const {date, explanation} = nasaData

    return (
        <div>
            <date>{date}</date>
            <p>{explanation}</p>
        </div>
    )
}


export default Info 