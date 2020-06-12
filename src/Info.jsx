import React from "react"
import styled from "styled-components"

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