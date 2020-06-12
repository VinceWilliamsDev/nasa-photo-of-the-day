import React from "react"
import styled from "styled-components"

const Header = props => {
    const { nasaData } = props
    // console.log(props)
    const {title} = nasaData

    return (
    <div>
        <h1>NASA Astronomy Picture of the Day!</h1>
        <h2>{title}</h2>
    </div>
    )
}

export default Header