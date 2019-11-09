import React from 'react'
import './Header.css'
function Header(){
    return (
        <div className="Header">
            <div className="title">INTRODUCTION</div>            
            <div className="router wrapper">
                <div className="router content">
                    <a href="/">Home</a>
                </div>
                <div className="router content">
                    <a href="/">Blog</a>
                </div>
                <div className="router content">
                    <a href="/">Gallery</a>
                </div>
                <div className="router content">
                    <a href="https://github.com/kimtahen">GitHub</a>
                </div>
            </div>
        </div>
    )
}
export default Header;