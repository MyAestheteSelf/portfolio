import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"
import "../css/navbar.css"

export const NavBar = (props) => {
    return (
        <div className="content-navigation">
            <div className="brand-name">Title</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Blogs</Link>
                <Link to="/">Gallery</Link>
                <button onClick={props.menu} >Button</button>
            </div>
        </div>
    )
}
