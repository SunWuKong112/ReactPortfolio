import React from "react";

function Portfolio(){
     const portFolioEntries = [{
          "appLink":"https://sunwukong112.github.io/WeatherApplication/",
          "title":"In browser weather app",
          "gitHubLink": "https://github.com/SunWuKong112/WeatherApplication",
          "description":"Lorem ipsum dolor sit mobile responsive, amet consectetur adipisicing elit. Quae ea ex distinctio temporibus sequi delectus non omnis quia debitis, optio voluptatem placeat iure fugiat facilis ut ullam rerum! Distinctio, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "teamMembers":[]
     },
     {
          "appLink":"https://sunwukong112.github.io/CalanderApp/",
          "title":"In browser dayplanner app",
          "gitHubLink": "https://sunwukong112.github.io/CalanderApp/",
          "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam maxime omnis et incidunt asperiores quia, id molestiae dolorem aliquid dignissimos unde dicta officia nesciunt, assumenda itaque eveniet quis iusto!",
          "teamMembers":[]
     },
     {
          "appLink":"https://jennifoo.github.io/project1/",
          "title":"Meal and drink recipe search engine for use by restaurants",
          "gitHubLink": "https://github.com/jennifoo/project1/pull/7",
          "description":"This project was Sean Askandari's idea. He used his experience in the food service industry to create a concept to fill a need that many small businesses such as bars and restaurants might have if they have a less rigidly defined menu, with more left up to customer preference. This application uses two different databases, of both food and drink, to furnish a readily queried list of recipes should the need to improvise arise.",
          "teamMembers":[{
                    "github":"https://github.com/seanaskandari",
                    "name":"Sean"
               },
               {
                    "github":"https://github.com/jennifooJennifer",
                    "name":"Jennifer"
               }
          ]
     },
     {
          "appLink":"https://obscure-escarpment-49999.herokuapp.com/",
          "title":"Stock Watch Inventory Manager",
          "gitHubLink": "https://github.com/Doremus256/SWIM",
          "description":"Lorem ipsum dolor sit mobile responsive, amet consectetur adipisicing elit. Quae ea ex distinctio temporibus sequi delectus non omnis quia debitis, optio voluptatem placeat iure fugiat facilis ut ullam rerum! Distinctio, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error, eius excepturi distinctio dolorem sit animi voluptatem illum perferendis. Dicta dolorum nam modi amet voluptas similique illum soluta deleniti error. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "teamMembers":[{
                    "github":"https://github.com/seanaskandari",
                    "name":"Sean"
               },
               {
                    "github":"https://github.com/bhoon07",
                    "name":"Blaine"
               },
               {
                    "github":"https://github.com/Doremus256",
                    "name":"Brad"
               }
          ]
     },
     {
          "appLink":"https://polar-chamber-40725.herokuapp.com/",
          "title":"Attack On Titan: Mindless titan simulator (Burger app)",
          "gitHubLink": "https://github.com/SunWuKong112/Eat-Da-Burger",
          "description":"I was supposed to make an application to 'simulate' eating a burger, but I turned the whole thing into an Attack on Titan reference with the same internal functionality of the intended project. Your web browser may offer to translate the German when you follow the website link.",
          "teamMembers":[]
     },
     {
          "appLink":"https://shielded-journey-91816.herokuapp.com/",
          "title":"Scribe",
          "gitHubLink": "https://github.com/SunWuKong112/NoteTakerWebsite",
          "description":"This is a note taking app I created for one of the homework assignments. When I have time I have plans to expand the application to include the capability of creating an account as well as encrypting all files stored in the server. As it stands, anyone can see the notes written here, and only the computer which uploaded them can delete them, because I tied deleting to the computers local storage I have plans of removing this and tying the deletion to the id instead, relying on the account creating and encryption for keeping documents secure.",
          "teamMembers":[]
     }];
     return(
          <border className="col-8">
          {portFolioEntries.map((entry, index)=>(
                    <article className="row">
                         <div className="col-md-12">
                              <div className="row">
                                   <div className="col-md-1"></div>
                                   <iframe className="col-md-10"src={entry.appLink} width="80%" height="800px" />
                              </div>
                              <div className="row">
                                   <div className="col-md-1"></div>
                                   <div className="col-md-10">
                                        <a href={entry.appLink}>{index+1}: {entry.title}</a>
                                        <br/>
                                        <a href={entry.gitHubLink}>Github repository</a>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-md-1"></div>
                                   <div className="col-md-10">
                                        <p>{entry.description}</p>
                                        {entry.teamMembers.map((contrib)=>(
                                             <div>
                                                  <a href={contrib.github}>{contrib.name}'s GitHub</a>
                                                  <br />
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </article>
          ))}
          </border>
     );
}

export default Portfolio;