import React from "react";
import girllap from './assets/girllap.png'
import girllap1 from './assets/girllap1.png'

function blopicture() {
    return(
        <div className="blopicture">
            <div className="sideleft">
                <div className="imgblog">
                   <img className="girl-image" src={girllap} alt="girl-img-pic" ></img>
                </div>
                <div className="tech">
                <h3>TECHNOLOGY</h3>
                </div>
                <div className="johndate">
                   <h3>John Doe . 19 Jan 2022</h3>
               </div>
                <div className="bigline">
                   <h1>A small business is only as good a</h1>
                   <h2>its tools and it is totally true.</h2>
               </div>
                <div className="blobutton">
                   <button id="btn">Read More <span> ↗ </span></button>
                </div>
            </div>

            <div className="sideright">
                <div className="imgblog">
                   <img className="girl-image" src={girllap1} alt="girl-img-pic" ></img>
                </div>
                <div className="tech">
                  <h3>TECHNOLOGY</h3>
                </div>
                <div className="johndate">
                   <h3>John Doe . 19 Jan 2022</h3>
                </div>
                <div className="bigline">
                   <h1>Colaboration with team members </h1>
                   <h2>that will be grow to business.</h2>
                </div>
                <div className="blobutton">
                   <button id="btn">Read More <span> ↗ </span></button>
                </div>

            </div>

        </div>
    )
}
export default blopicture;