import React from "react"

const Header = props => {
    const { nasaData } = props
    console.log(props)
    return (
    <div className="imageTitle">
        <p>{nasaData.title}</p>
    </div>
    )
}

export default Header