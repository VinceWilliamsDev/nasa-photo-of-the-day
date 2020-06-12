import React from "react"

const Info = (props) => {
    const {nasaData} = props
    const {explanation} = nasaData

    return (
        <div>
            <p>{explanation}</p>
        </div>
    )
}


export default Info 