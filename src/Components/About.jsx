import React from "react";
import profileimg from '../images/profilepic.jpg';


const About =(profile)=>{

    const data =[
        {
            "id":1,
            "name":"education",
        },
        {
            "id":2,
            "name":"interest"
        }        
    ];
   
    return(
        
        <div id="about">

            <div class="row">
                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="cardj mx-3 px-3">
                        <div class="card-body ">
                            <img src={profileimg} style={{borderRadius:"50%", width:"310px" , height:"330px"}} className="card-img mx-5" alt="profile-img"/>
                            <a href="https://drive.google.com/file/d/16bYho15yKs3Whjop7gbX5T2p4wJEc8JX/view" className="btn btn1"> <i class="uil uil-envelope-alt"></i> Resume</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-8 mb-3 mb-sm-0">
                    <div class="cardj m-2 p-2">
                        <div className="card-title">
                            <h1 className="text-light mx-2">About Me</h1>
                            <p style={{color:"#f39f5b"}}>As a Full Stack Developer developing and integrating multi-faceted applications. Proficient in HTML,CSS,Javascript,ReactJS and in creating bug-free systems to meet client expectations.</p>
                        </div>
                        <div class="card-body">
                            <div className="card-body-title d-flex">
                                <div className="education">
                                <h4 className="mx-4" style={{color:"aqua"}}>Education</h4>
                                <p>
                                    <ul>
                                        <li>
                                            <span>
                                                MDU Rohtak</span>,India<br/>July 2022<br/>Bachelor's of Computer Application                                
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span>
                                                Modern School,Faridabad</span>,India<br/>July 2018<br/>XII - Non-Medical                                
                                        </li>
                                    </ul>
                                </p>
                                </div>
                                <div className="certification">
                                <h4 className="mx-4" style={{color:"aqua"}}>Certifications</h4>
                                <p>
                                    <ul>
                                        <li>
                                            <span>Lets Upgrade ReactJS Bootcamp</span><a href="https://verify.letsupgrade.in/certificate/LUERJSJUN123362"><i class="bi bi-link-45deg"></i></a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span>Lets Upgrade HTML&CSS Bootcamp</span><a href="https://verify.letsupgrade.in/certificate/LUEHTMLJUN123396"><i class="bi bi-link-45deg"></i></a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span>Lets Upgrade Postman Api Fundammentals Experts</span><a href="https://verify.letsupgrade.in/certificate/LUEPAFSJUL12327"><i class="bi bi-link-45deg"></i></a>
                                        </li>
                                    </ul>
                                </p>
                                </div>

                            </div>
                            <h4 className="mx-4" style={{color:"aqua"}}>Interest</h4>
                            <p>
                                <ul>
                                    <li>
                                        Travelling
                                    </li>
                                    <li>
                                        Listening Music
                                    </li>
                                </ul>
                            </p>                        
                        </div>
                    </div>
                </div>
            </div>
            
        </div> 
    
    )

}

export default About;