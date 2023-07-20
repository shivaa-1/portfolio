import React from "react";

const Navbar =()=>{
    return(
        <div id="header">
        <div className="container">
            <nav>
                <h2 className="name"><span style={{color:"yellow"}}>S</span><span style={{fontSize:"23px"}}>hivam</span> <span style={{color:"yellow"}}>S</span><span style={{fontSize:"23px"}}>harma</span></h2>
                <ul id="sideMenu">
                    <li><a href="/header">Home</a></li>
                    <li> <a href="/About">About</a> </li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/workAndProject">Work/Projects</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/contact">Contact me</a></li>
                    <i className="uil uil-mutliply" onclick="closeMenu()"></i>   
                </ul>
                <i className="uil uil-apps" onclick="openMenu()"></i>   
            </nav>

            <div className="header-text">
                <h1>Hi....! <br/> I am <span>Shivam </span> Sharma</h1>
                <p>Full Stack Developer</p>
            </div>

            
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/shiva-sharma-2-1-1-0-/"><i className="uil uil-linkedin"></i></a>
                <a href="https://github.com/shivaa-1"><i className="uil uil-github"></i></a>
            </div>
        </div>
    </div>


    )
}

export default Navbar;