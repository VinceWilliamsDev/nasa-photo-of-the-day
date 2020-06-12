import React from "react"

const Photo = (props) => {
    const { nasaData } = props
    const { url, title } = nasaData

    return (
        <div className="image">
            <img src={url} alt={title}/>
        </div>
    )
}


export default Photo