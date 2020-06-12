import React from "react"
import styled from "styled-components"

const ImageStyle = styled.img`
    max-width: 100%;
    max-height: 86vh
` 

const Photo = (props) => {
    const { nasaData } = props
    const { url, title } = nasaData

    return (
        <div>
            <ImageStyle src={url} alt={title}/>
        </div>
    )
}


export default Photo