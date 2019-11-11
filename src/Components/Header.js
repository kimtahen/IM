import React from 'react'
import './Header.css'
function Header(){
    var title_text = {
        information:[
            {
                id:0,
                text: 'Home'
            },
            {
                id:1,
                text: 'Blog'
            },
            {
                id:2,
                text: 'gallery'
            }

        ]
    }
    var show_title =  title_text.information[0].text;
    function title_change(n){
        show_title = title_text.information[n].text;
    }
    return (
        <div className="Header">
            <div className="title">INTRODUCTION</div>            
            <div className="router wrapper">
                <div className="router content">
                    <a href="/home" onClick="title_change(0);">Home</a>
                </div>
                <div className="router content">
                    <a href="/blog" onClick="title_change(1);return false;">Blog</a>
                </div>
                <div className="router content">
                    <a href="/gallery"onClick="title_change(2);">Gallery</a>
                </div>
                <div className="router content">
                    <a href="https://github.com/kimtahen">GitHub</a>
                </div>
            </div>
        </div>
    )
}
export default Header;