import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../css/all.css";
import "../css/Email.css";

function Email() {
    return (
        <div className="part5">
            <div className="container part5-Conatiner col-lg-7 col-md-8 col-sm-12 col-12 m-auto overflow-hidden">
                <div className="part5-header">Get In Touch</div>
                <div class="row g-3">
                    <div class="col-6 mt-0">
                        <div class="p-3">
                            <div class="form-floating">
                                <input type="name" class="form-control" id="floatingInput" placeholder="+20123456789"></input>
                                <label for="floatingInput">First Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mt-0">
                        <div class="p-3">
                            <div class="form-floating">
                                <input type="name" class="form-control" id="floatingInput" placeholder="+20123456789"></input>
                                <label for="floatingInput">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mt-0">
                        <div class="p-3">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mt-0">
                        <div class="p-3">
                            <div class="form-floating">
                                <input type="phonenumber" class="form-control" id="floatingInput" placeholder="+20123456789"></input>
                                <label for="floatingInput">Phone Number</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-0 mb-3">
                        <div class="p-3">
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" Style="height: 100px"></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row col-2 m-auto mb-3">
                    <input class="btn btn-primary" type="submit" value="Submit"></input>
                </div>
            </div>
        </div>
    );
}

export default Email;
