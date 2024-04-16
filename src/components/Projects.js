import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../css/all.css";
import "../css/projects.css";
import pic1 from "../media/p1.jpeg";
import pic2 from "../media/p2.avif";
import pic3 from "../media/p3.avif";
import pic4 from "../media/p4.jpg";
import pic5 from "../media/p5.jpg";
import pic6 from "../media/pic6.jpg";

function Projects(){
    return(
        <div className="Allprojects">
        <div className="Header">My projects</div>
        <div class="container projects">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card bg-dark text-white">
                        <img src={pic1} class="card-img" alt="..." height={'100%'}></img>
                        <div class="card-img-overlay">
                            <p class="card-text">
                                <p className="Header">FlixHub App</p>
                                <p>
                                This app provides a comprehensive and user-friendly 
                                web application for browsing and discovering movies 
                                and series. 
                                </p>
                                <button class="btn btn-primary seemorebtn" type="button" ><a href="https://github.com/AyaA1i/movie-app">see more <i class="fas fa-arrow-right"></i></a></button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class="card bg-dark text-white">
                        <img src={pic2} class="card-img" alt="..." height={'100%'}></img>
                        <div class="card-img-overlay">
                        <p class="card-text">
                                <p className="Header">Ocean Box</p>
                                <p>
                                This website provides a comprehensive and user-friendly 
                                homepage for a fish store. 
                                </p>
                                <button class="btn btn-primary seemorebtn" type="button" ><a href="https://ayaa1i.github.io/OceanBox/">see more <i class="fas fa-arrow-right"></i></a></button>
                            </p>
                        </div>
                    </div>                
                </div>
                <div class="col">
                <div class="card bg-dark text-white">
                        <img src={pic3} class="card-img" alt="..." height={'100%'}></img>
                        <div class="card-img-overlay">
                        <p class="card-text">
                        <p className="Header">Toffee project</p>
                                <p> 
                                Project coded by java and clarified using UML designs 
                                used CSV files to store data and used libraries to send a 
                                real OTP to email.  
                                </p>
                                <button class="btn btn-primary seemorebtn" type="button" ><a href="https://github.com/mariamayman10/Toffee/tree/main">see more <i class="fas fa-arrow-right"></i></a></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                <div class="card bg-dark text-white">
                        <img src={pic4} class="card-img" alt="..." height={'100%'}></img>
                        <div class="card-img-overlay">
                        <p class="card-text">
                        <p className="Header">Orders</p>
                                <p>
                                This projects provides features to control the orders and 
                                notifications  
                                </p>
                                <button class="btn btn-primary seemorebtn" type="button" ><a href="https://github.com/AyaA1i/Orders-and-Notifications-Management">see more <i class="fas fa-arrow-right"></i></a></button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class="card bg-dark text-white">
                        <img src={pic5} class="card-img" alt="..." height={'100%'}></img>
                        <div class="card-img-overlay">
                        <p class="card-text">
                                <p className="Header"> Student Affairs</p>
                                <p>
                               
                                A website to add, edit, and delete students' data in the 
                                college system. 
                                </p>
                                <button class="btn btn-primary seemorebtn" type="button" ><a href="https://github.com/AyaA1i/Web-Project-1">see more <i class="fas fa-arrow-right"></i></a></button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class="card bg-dark text-white">
                        <img src={pic6} class="card-img" alt="..." height={'100%'}></img>
                        <div class="card-img-overlay">
                        <p class="card-text">
                                <p className="Header">Library System </p>
                                <p>
                                A desktop application saves data in SQL tables and 
                                connects with it by Java GUI. 
                                </p>
                                <button class="btn btn-primary seemorebtn" type="button" ><a href="https://github.com/AyaA1i/UniversityLibraryManagement">see more <i class="fas fa-arrow-right"></i></a></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
export default Projects;