import React, { useState, useEffect, } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    const [pos, setPos] = useState("top")

    useEffect (() =>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5){
               setPos("moved")
            } else {
               setPos("top")
            }
        })
    },[])

    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top" style={{backgroundColor: pos === "top" ? "transparent" : "white" }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Muhammad Anas</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/portfolio"
                                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >
                                Portfolio
                        </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                        </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="li-ic" href="https://www.linkedin.com/in/muhammad-a-932888153/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin fa-lg mr-md-5 mr-3"> </i>
                        </a></li>

                        <li className="nav-item"><a className="git-ic" href="https://github.com/anasm23" target="_blank" rel="noreferrer">
                            <i className="fab fa-github fa-lg mr-md-5 mr-3"></i></a></li>

                        <li className="nav-item"><a class="email-ic" href="mailto: muhammadanas112@gmail.com">
                            <i class="fas fa-envelope fa-lg white-text mr-md-5 mr-3 fa-lg"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;