import React from "react";
// import '@fortawesome/fontawesome-svg-core'

const Skill=()=>{
    return(
        <div id="skills">
    <div className="container">
        <h1 className="sub-title">Skills</h1>
        <div className="skills-list">
            <div className="skill">
                <div style={{backgroundColor:"orange" , width: "70%"}}><i class="uil uil-html5"></i> HTML5</div>
                <div style={{backgroundColor: "white" , width: "30%"}}>70%</div>
            </div> 
            
            <div className="skill">
                <div style={{backgroundColor: 'blue', width: "80%"}}><i class="uil uil-css3-simple"></i> CSS</div>
                <div style={{backgroundColor: "white", width: "30%"}}>70%</div>
            </div>

            <div className="skill">
                <div style={{backgroundColor: "gold" , width: "80%"}}><i class="uil uil-java-script"></i> Javascript</div>
                <div style={{backgroundColor: "white", width: "30%"}}>70%</div>
            </div>

            <div className="skill">
                <div style={{backgroundColor: "rgb(255, 0, 115)" , width: "80%"}}><i class="uil uil-react"></i> React.JS</div>
                <div style={{backgroundColor: "white" , width: "30%"}}>80%</div>
            </div>
            <div className="skill">
                <div style={{backgroundColor: "rgb(255, 51, 0)" , width: "80%"}}><i class="fa-brands fa-node"></i><i class="uil uil-java-script"></i> NodeJs</div>
                <div style={{backgroundColor: "white" , width: "30%"}}>70%</div>
            </div>
            <div className="skill">
                <div style={{backgroundColor: "greenyellow" , width: "80%"}}><i class="uil uil-java-script"></i> Express</div>
                <div style={{backgroundColor: "white" , width: "30%"}}>70%</div>
            </div>

            <div className="skill">
                <div style={{backgroundColor: "rgb(46, 14, 163)" , width: "80%"}}><i class="uil uil-database"></i> Mongodb</div>
                <div style={{backgroundColor: "white" , width: "30%"}}>70%</div>
            </div>

            <div className="skill">
                <div style={{backgroundColor: "rgb(66, 163, 14)", width: "80%"}}> <i class="bi bi-bootstrap-fill"></i> Bootstrap</div>
                <div style={{backgroundColor: "white", width: "30%"}}>70%</div>
            </div>

            <div className="skill">
                <div style={{backgroundColor: "rgb(156, 135, 235)" , width: "80%"}}><img src="https://miro.medium.com/max/1025/1*BKssrX-qEmyN6YaRNTvNlw.png" height={"20px"} width={"30px"} alt="mui" /> MUI</div>
                <div style={{backgroundColor: "white" , width: "30%"}}>70%</div>
            </div>

            <div className="skill">
                <div style={{backgroundColor: "rgb(14, 163, 54)", width: "80%"}}><i class="uil uil-react"></i> ReactStrap</div>
                <div style={{backgroundColor: "white" , width: "30%"}}>70%</div>
            </div>
        </div>
    </div>

    <div style={{margintop: "20px"}}>
        <h1 className="mx-4">Tools</h1>
        <div className="tools row">
            <div className="tool col-sm-6" style={{backgroundColor:"rgb(82, 74, 74) " , fontSize:"30px" , textAlign:"center"}}><i class="uil uil-github"></i> Git</div>
            <div className="tool col-sm-6" style={{backgroundColor:"rgb(44, 52, 214)", fontSize:"25px" , textAlign:"center"}}><i class="uil uil-visual-studio"></i> Vscode</div>
            <div className="tool col-sm-6" style={{textAlign:"center"}}> <img src="https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo.png" width={'270px'} height={'50px'}  alt="postman" /> </div>
            <div className="tool col-sm-6" style={{backgroundColor:"rgb(82, 74, 74)", fontSize:"18px" , textAlign:"center"}}><i class="uil uil-bolt"></i> ThunderClient</div>
            <div className="tool col-sm-6" style={{textAlign:"center"}}><img src="https://d33wubrfki0l68.cloudfront.net/3fb801524473d334002fd611283d625d79def645/2607e/static/6bb3920296fc4a057236252542d8ebea/eff08/netlify-cms.jpg" width={'265px'} height={'57px'}  alt="netlify" /></div>
            <div className="tool col-sm-6" style={{backgroundColor:"rgb(104, 247, 104)", color:"darkblue" , fontSize:"35px" , textAlign:"center"}}>render</div>
            <div className="tool col-sm-6" style={{textAlign:"center"}}><img src="https://tse4.mm.bing.net/th?id=OIP.Ak15ZZEYmD0-MHrNk0qEaQHaB2&pid=Api&P=0&h=180" width={'265px'} height={'57px'}  alt="vercel" /></div>
        </div>
    </div>
</div>

    )

}

export default Skill;