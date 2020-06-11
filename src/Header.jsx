import React from "react"

const Header = props => {
    const [ title ] = props
    return (
    <div className="imageTitle">
        <p>`{title}`</p>
    </div>
    )
}

export default Header