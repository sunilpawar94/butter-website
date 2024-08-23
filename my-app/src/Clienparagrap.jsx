import React from "react";
import candipic from './assets/candipic.png'

function clienparagrap() {
    return(
        <div className="mainclien">
            <div className="clienparagrap">
                <div className="sym">
                   <h1>“</h1>
                </div>
                <div className="para">
                    <div className="circlebtn">
                     <h2>←</h2>
                   </div>
                    <div className="loaren">
                       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in </h3>
                       <h3>dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum,</h3>
                       <h3>consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras </h3>
                       <h3>aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. </h3>
                       <h3>Natoque blandit augue integer maecenas mattis amet, nec.</h3>
                    </div>
                
                </div>
                <div className="canditprofil">
                    <div className="canpic">
                    <img className="candi-image" src={candipic} alt="candi-img-pic" ></img>
                    </div>
                    <div className="canname">
                        <h2>Brooklyn Simmons</h2>
                        <h3>Pendron.Inc, CEO</h3>
                    </div>
                    <div className="stars">
                        <h3>*****</h3>
                    </div>
                </div>
            </div>
            <div className="clienparagraptwo">
               <div className="sym">
                  <h1>“</h1>
               </div>
               <div className="para">
                   <div className="loaren">
                     <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in </h3>
                     <h3>dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum,</h3>
                     <h3>consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras </h3>
                     <h3>aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. </h3>
                     <h3>Natoque blandit augue integer maecenas mattis amet, nec.</h3>
                   </div>
            
                </div>
                <div className="canditprofil">
                    <div className="canpic">
                       <img className="candi-image" src={candipic} alt="candi-img-pic" ></img>
                    </div>
                    <div className="canname">
                       <h2>Brooklyn Simmons</h2>
                       <h3>Pendron.Inc, CEO</h3>
                    </div>
                    <div className="stars">
                       <h3>*****</h3>
                    </div>
                </div>
            </div>
        </div>
    
    )


}

export default clienparagrap;