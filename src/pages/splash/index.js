import React from "react";

function Splash(stuff){
     return(
     <div class="container">
          <div class="row">
               <div class="col-md-12" style={{alignContent: "center"}}>
                    <div class="col-6" style={{marginRight: 15, float: "left"}}>
                         <div class="card">
                              <div class="container">
                                   <h1 class="title-card">Kyle Gribble</h1>
                                   <h4>Web developmer</h4>
                                   <h4>JavaScript specialist</h4>
                                   <button onClick={(e)=>stuff.onClick("Home")}>Enter</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     );
}

export default Splash;