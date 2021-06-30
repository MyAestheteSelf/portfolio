import React from 'react'
import "../css/header.css"

export const Header = (props) => {
    return (
        <div className="container-header">
            <img src={props.imgs} className="Header-Img" alt="" />
            <h2 className="Header-text">My Aesthete Self</h2>
        </div>
    )
}
