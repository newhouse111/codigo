import React, { useState } from "react";
import "./PageA.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { CgPill } from "react-icons/cg";
import backpepe from "./Fotos/backgroundpepe.jpg";
import pepe from "./Fotos/pepe.webp";
import hipo from "./Fotos/hipo.png"
import hipoB from "./Fotos/hiiipooo.png"
import hipoC from "./Fotos/backtrumpppp.png"
import hipoD from "./Fotos/trumplogo.png"

function PageA() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    setPosition({ x, y });
  };

  return (
    <div
      id="home-section"
      className="pagea"
      style={{
        backgroundImage: `url(${hipoC})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onMouseMove={handleMouseMove}
    >
      <img
        className="pepemove"
        src={hipoD}
        alt=""
        style={{
          transform: `translate(${-position.x / 0.5}%, ${-position.y / 0.5}%)`, // Movimento contrário
        }}
      />
      <div className="tittlename">HIPPOTRUMP</div>
      <div className="invest">INVEST IN $HIPPOTRUMP</div>
      <a href="https://pump.fun/board" className="buynow">
        BUY NOW ➜
      </a>
      <div className="iconsboxb">
        <a href="https://x.com/hippotrumppp" title="X (Twitter)">
          <div className="buttonxb">
            <FaXTwitter size={30} />
          </div>
        </a>
        <a href="https://pump.fun/board" title="Telegram">
          <div className="buttonteleb">
            <FaTelegram size={30} />
          </div>
        </a>
        <a href="https://pump.fun/board" target="_blank" title="Pump.fun">
          <div className="buttonpumpb">
            <CgPill size={30} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default PageA;
