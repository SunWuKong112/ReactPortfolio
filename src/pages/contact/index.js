import React, {useRef} from 'react';

function ContactPage(){    
     const inputRef = useRef();
     function focus(){
          inputRef.current.focus();
     } 
     function submit(e){
          e.preventDefault();
          console.log(e);
          // document.getElementById('contact-form').submit();
     }
     return(
     <div>
           {/*Section heading*/}
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
          {/*Section description*/}
          <p class="text-center">If you wish to inquire for my services, enter your contact information below.</p>
          <div class="row">
               <div class= "col-lg-4 col-md-12">
                    <div class="col-12 text-center">
                         <ul class="list-unstyled mb-0">
                              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                   <p>Fort Worth, TX 76036, USA</p>
                              </li>
                              <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                   <p>(817) 565 0329</p>
                              </li>
                         
                              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                   <p>dribbleGribble0516@gmail.com</p>
                              </li>
                              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                   <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3BzSvPuoUDSeSnwinpXwpL3Q%3D%3D" >LinkedIn</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
    

        {/*Grid column*/}
        <div class="col-lg-4 col-md-12"></div>
          <div class="col-lg-4 col-md-12">
               <form render={()=>focus()} id="contact-form" name="contact-form" onSubmit={submit}>
                {/*Grid row*/}
                     <div class="row">
                    {/*Grid column*/}
                         <div className="col-md-6">
                                 <input ref={inputRef} type="text" id="name" nameName="name" class="form-control" />
                              <label for="name" className="">Your name</label>
                         </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                         <div className="col-md-6">
                                 <input type="text" id="email" name="email" className="form-control" />
                                 <label for="email" class="">Your email</label>
                         </div>
                    {/*Grid column*/}
                    </div>
                {/*Grid row*/}

                {/*Grid row*/}
                    <div class="row">
                         <div class="col-md-12">
                                 <input type="text" id="subject" name="subject" class="form-control" />
                              <label for="subject" class="">Subject</label>
                         </div>
                    </div>
                {/*Grid row*/}

                {/*Grid row*/}
                    <div class="row">
                    {/*Grid column*/}
                         <div class="col-md-12">
                              <div class="md-form">
                                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" />
                                      <label for="message">Your message</label>
                              </div>
                         </div>
                     </div>
                {/*Grid row*/}
                 </form>

              <div class="text-center text-md-left">
                     <button class="btn btn-primary" type="submit">Send</button>
               </div>
               <div class="status"></div>
          </div>
        {/*Grid column*/}
    </div>
    );
}

export default ContactPage;