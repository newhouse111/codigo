import React from "react";
import "./Navbar.css";
import pepefoto from "./Fotos/trumplogo.png"

function Navbar(){
    return(
        <div className="header">
            <div className="navbar">
                <img className="ppfoto"src={pepefoto}></img>
                <div className="logo-container">
                    <a href="#home-section" className="HOME">HOME</a>
                    <a href="#about-section"className="ABOUT">ABOUT</a>
                    <a href="#TOKEN-HOWTOBUY-section"className="TOKENOMICS">TOKENOMICS</a>
                    <a href="#TOKEN-HOWTOBUY-section"className="HOWTOBUY">HOW TO BUY</a>
                    <a href="#COMMUNITY-section"className="COMMUNITY">COMMUNITY</a>
                </div>
            </div>
        </div>
    )
}


export default Navbar