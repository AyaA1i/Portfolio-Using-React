import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../css/all.css";
import "../css/landing.css";


function Landing(){
    return(
        <>
         <div className="landing">
            <div className="part2">
                <div class = "static-txt">
                    Hi,
                </div>
                <div class = "static-txt">
                    I'm Aya,
                </div>
                <ul className="dynamic-txt">
                    <li><span>Web Developer </span></li>
                </ul>
            </div>
            <div className="part3 d-lg-block d-md-block d-sm-block d-none">   
            </div>
            <div className="description">
                <span>Front End Developer / C++ / Java / React</span>
            </div>
            <div className="connectbt">
                <a href="https://www.linkedin.com/in/aya-ali-624112242/">
                    <span>Let's Connect </span>
                    <i class="fa-solid fa-arrow-right arrow"></i>
                </a>
            </div>
         </div>
        </>
    );
}
export default Landing;

