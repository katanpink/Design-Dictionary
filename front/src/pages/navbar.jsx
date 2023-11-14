import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

export default function Nav() {
    //Reusable navebar for all sites that also connects the routes
    return (
        <div className="page" id="top">
            <ul className="nav-bar">
                <div className="sm-logo"></div>
                <div className="nav-item"><Link to={`/`}>Home</Link></div>
                <div className="nav-item"><Link to={`/blogs`}>Blogs</Link></div>
                <div className="nav-item"><Link to={`/contact`}>Contact</Link></div>
                <div className="nav-item"><Link to={`/about`}>About</Link></div>
                <div className="nav-item"><Link to={`/create`}>Post</Link></div>
                <div className="nav-space" ><Link to={`/`}></Link></div>
                <div className="nav-sign" ><Link to={`/register`}>Sign-in</Link></div>
            </ul>
        </div>
    )
 }

function  signChk() {
    
}