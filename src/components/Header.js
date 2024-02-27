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
                <li class="nav-item icon">
                <a class="nav-link" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li class="nav-item icon">
                <a class="nav-link" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
                <li class="nav-item icon">
                <a class="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li class="nav-item connectbtn">
                <a class="nav-link" href="#">Let's Connect</a>
                </li>
            </ul>
            </span>
            </div>
        </div>
        </nav>
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
        <div className="part3">
            
        </div>
        </div>
        </>
    )
}
export default Header;