import React from "react"

const Header = props => {
    const { nasaData } = props
    // console.log(props)
    const {title} = nasaData
    return (
    <div className="imageTitle">
        <h1>NASA Astronomy Picture of the Day!</h1>
        <h2>{title}</h2>
    </div>
    )
}

export default Header