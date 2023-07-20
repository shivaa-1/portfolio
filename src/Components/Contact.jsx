import React from "react";

const Contact = ()=>{
    return(
        <div id="contact">
    <div class="container">
        <div class="row">
            <div class="col-contact-1">
                <h1 class="sub-title">Contact me</h1>
                <p><i class="uil uil-envelope"></i>shivamsharma2110@gmail.com</p>
                <p><i class="uil uil-mobile-android"></i>91-9650260757</p>

            <div class="social-icons">
                <a href="https://www.linkedin.com/in/shiva-sharma-2-1-1-0-/"><i class="uil uil-linkedin"></i></a>
                <a href="https://github.com/shivaa-1"><i class="uil uil-github"></i></a>
            </div>
            <a href="https://drive.google.com/file/d/16bYho15yKs3Whjop7gbX5T2p4wJEc8JX/view" target="_blank" class="btn btn1">Resume <i class="uil uil-file-download-alt"></i></a>
            </div>
            <div class="col-contact-2">
                <span id="msg"></span>
            </div>
        </div>
    </div>
</div>


    )

}

export default Contact;