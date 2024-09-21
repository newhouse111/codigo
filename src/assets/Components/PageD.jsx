import React from "react";
import "./PageD.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { CgPill } from "react-icons/cg";
import pepefoto from "./Fotos/trumplogo.png";

function PageD(){
    return(
        <div id= "COMMUNITY-section" className="paged">
            <img className="ppfoto2"src={pepefoto}></img>
            <div className="texticonsbox">
            <div className="name2">$HIPPOTRUMP</div>
            <div className="textt">JOIN OUR COMMUNITY!</div>
            <div className="iconsbox">
                    <a href="https://x.com/hippotrumppp" title="X (Twitter)">
                        <div className="buttonx"><FaXTwitter size={30} /></div>
                    </a>
                    <a href="https://pump.fun/board" title="Telegram">
                        <div className="buttontele"><FaTelegram size={30} /></div>
                    </a>
                    <a href="https://pump.fun/board" title="Pump.fun">
                        <div className="buttonpump"><CgPill size={30} /></div>
                    </a>
                    </div>
                </div>
        </div>
    )
}


export default PageD