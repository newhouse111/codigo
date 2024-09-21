import React from "react";
import "./PageB.css";
import pepe from "./Fotos/trumpspin.png"

function PageB(){
    return(
        <div id= "about-section" className="pageb">
            <div className="textboxb">
                <h2>WHITE PAPER</h2>
                <h3>NOT JUST ANOTHER COIN</h3>
                <p>$HIPPOTRUMP stands out not just for its unique look but also for the dedicated team behind it. We developers work tirelessly to ensure the platform delivers gains and secures short-term investments, which builds trust among investors and users alike.</p>
                <p>Our attention to detail ensures that $HIPPOTRUMP adapts to market trends and demands swiftly, and our proactive approach keeps the platform aligned with best practices, offering significant opportunities for gains.</p>
                <p>Moreover, our team is committed to transparency in this environment by sharing chat groups and support on platforms such as Telegram and X.</p>
                <p>Our project is well-positioned for growth and success!!!</p>
            </div>
            <img src={pepe} alt="Imagem Rotativa" class="riA" />
            <img src={pepe} alt="Imagem Rotativa" class="riB" />
            <img src={pepe} alt="Imagem Rotativa" class="riC" />
            <img src={pepe} alt="Imagem Rotativa" class="riD" />
            <img src={pepe} alt="Imagem Rotativa" class="riE" />
            <img src={pepe} alt="Imagem Rotativa" class="riF" />
            <img src={pepe} alt="Imagem Rotativa" class="riG" />
            <img src={pepe} alt="Imagem Rotativa" class="riH" />
        </div>
    )
}


export default PageB