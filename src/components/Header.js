import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../css/all.css";
import "../css/Header.css";


function Header(){
    return(
        <>
        <div className="part1">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Aya Ali</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item item">
                <a class="nav-link" href="#">Skills</a>
                </li>
                <li class="nav-item item">
                <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item icon mb-2">
                <a class="nav-link" href="https://www.facebook.com/ayyaallii?mibextid=ZbWKwL"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li class="nav-item icon mb-2">
                <a class="nav-link" href="https://www.linkedin.com/in/aya-ali-624112242/"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
                <li class="nav-item icon mb-2">
                <a class="nav-link" href="https://www.instagram.com/ayaa_allii"><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li class="nav-item connectbtn">
                <a class="nav-link" href="https://www.linkedin.com/in/aya-ali-624112242/">Let's Connect</a>
                </li>
            </ul>
            </span>
            </div>
        </div>
        </nav>
        </div>
        </>
    )
}
export default Header;