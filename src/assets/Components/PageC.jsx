import React from "react";
import "./PageC.css";
import starsImage from "./Fotos/stars.webp"; 
import pepe from "./Fotos/trumpfotooo.png"

function PageC() {
  return (
    <div id="TOKEN-HOWTOBUY-section" className="pagec">
        <div className="boxeconomics">
            <img className='pepee' src={pepe} alt="" />
            <div className="tokenomicsbox">
            <div className="boxttaxes">
              <h2>TAXES</h2>
              <p>FREE</p>
            </div>
            <div className="boxliquidty">
            <h2>LIQUIDITY</h2>
            <p>BURNED</p>
            </div>
            <div className="boxcontract">
            <h2>CONTRACT</h2>
            <p>RENOUNCED</p>
            </div>
            <div className="boxsupply">
            <h2>SUPPLY</h2>
            <p>1 BILLION</p>
            </div>
            </div>
        </div>
      <div className="textboxc">
        <div className="box" style={{ backgroundImage: `url(${starsImage})` }}>
          <h2>STEP 1</h2>
          <h3>SET UP PHANTOM</h3>
          <p>If you don’t have Phantom wallet yet, install the browser extension from phantom.app</p>
          <hr />
          <p>Create a new wallet or import an existing one by following the on-screen instructions. Make sure to save your recovery phrase and private key in a secure location.</p>
        </div>
        <div className="box" style={{ backgroundImage: `url(${starsImage})` }}>
          <h2>STEP 2</h2>
          <h3>ADD FUNDS TO PHANTOM</h3>
          <p>Open Phantom and ensure you are on the wallet you wish to buy from.</p>
          <hr />
          <p>Purchase SOL through the available methods or send SOL from another wallet to your Phantom wallet address.</p>
        </div>
        <div className="box" style={{ backgroundImage: `url(${starsImage})` }}>
          <h2>STEP 3</h2>
          <h3>CONNECT WALLET TO PUMP.FUN</h3>
          <p>Open Pump.fun using links below or search token name on the platform.</p>
          <hr />
          <p>Make sure you have connected your wallet on pumpfun or raydium and Swap some SOL for $HIPPOTRUMP.</p>
        </div>
        <div className="box" style={{ backgroundImage: `url(${starsImage})` }}>
          <h2>STEP 4</h2>
          <h3>PREPARE FOR PUMPS</h3>
          <p>You can visit dexscreener or pump.fun to view chart and token progression.</p>
          <hr />
          <p>Prepare your bags! If you have questions, feel free to visit and ask anything on our telegram group!</p>
        </div>
      </div>
    </div>
  );
}

export default PageC;
