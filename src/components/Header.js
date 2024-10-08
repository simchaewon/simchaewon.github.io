import React from 'react';


const Header=()=>{
    return(
       <header id="header">
        <div className="header_inner">
            <h1 className="logo">Site portfolio</h1>
            <nav className="header_nav">
                <ul>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#ability">Ability</a></li>
                    <li><a href="#site">Site</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header;