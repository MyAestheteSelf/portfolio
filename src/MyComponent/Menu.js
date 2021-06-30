import React from 'react'
import { Link } from 'react-router-dom'
import "../css/menu.css"

export const Menu = () => {
    return (
        <div className="container-menu">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">Gallery</Link>
        </div>
    )
}
