import React from "react";
import "./Movingtext.css"

function Movingtext(){
    return( 
        <div className="slidBack">
            <div className="slidnavbar">
                <div className="slidtext">
                {Array.from({ length: 1000 }).map((_, index) => (
                        <div className="li" key={index}>$HIPPOTRUMP</div>
                    ))}
                </div> 
            </div>
        </div>)
}

export default Movingtext
