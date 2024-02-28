import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../css/all.css";
import "../css/Skills.css";


function Skills(){
    return(
        <>
        <div className="All">
            <div className="container">
            <p className="header">Skills</p>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="slidesContainer"
                >
                <SwiperSlide className="slide">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                95%
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#d06cac" />
                            <stop offset="100%" stop-color="#8a2c67" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                   </svg>
                    </div>
                    <div className="skill">
                        C++
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                80%
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#d06cac" />
                            <stop offset="100%" stop-color="#8a2c67" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" className="C2" />
                   </svg>
                    </div>
                    <div className="skill">
                        Java
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                70%
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#d06cac" />
                            <stop offset="100%" stop-color="#8a2c67" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" className="C3" />
                   </svg>
                    </div>
                    <div className="skill">
                        React
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                80%
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#d06cac" />
                            <stop offset="100%" stop-color="#8a2c67" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" className="C4"  />
                   </svg>
                    </div>
                    <div className="skill">
                        JavaScript
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                95%
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#af005f"/>
                            <stop offset="100%" stop-color="#d06caba6" />
                            <stop offset="100%" stop-color="#56002f" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" className="C5" />
                   </svg>
                    </div>
                    <div className="skill">
                        CSS
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            
        </div>
        </>
    );
}
export default Skills;

