import React from "react";

import DisplayItem from "./displayItem";

import "./displayList.css";

import logo1 from "../../img/Group  49.jpeg";
import logo2 from "../../img/Group  49.jpeg";
import logo3 from "../../img/Group 50.png";
import logo4 from "../../img/Group 51.png";
import logo5 from "../../img/Group 52.jpg";
import logo6 from "../../img/Group 53.png";

const DisplayList = (props) => {
  return (
    <div className="hero">
      <section className="hero">
        <div className="hero-container">
          <h2>Generate Demand for your</h2>
          <h2>Products and Services</h2>
          <p>We help advertisers connect to their target customers</p>
          <p>across multiple platforms anytime - anywhere</p>
          <div className="col-auto">
            {/* <label class="sr-only" for="inlineFormInputGroup">Username</label> */}
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <a href="#about" className="btn-get-started">
            Get Started
          </a>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li>
              <img
                src={logo1}
                className="logo"
                height="50px"
                width="55px"
                alt="instagram"
              />
            </li>
            <li>
              <img
                src={logo2}
                className="logo"
                height="50px"
                width="55px"
                alt="facebook"
              />
            </li>
            <li>
              <img
                src={logo3}
                className="logo"
                height="50px"
                width="55px"
                alt="time"
              />
            </li>
            <li>
              <img
                src={logo4}
                className="logo"
                height="50px"
                width="55px"
                alt="twitter"
              />
            </li>
            <li>
              <img
                src={logo5}
                className="logo"
                height="50px"
                width="55px"
                alt="google"
              />
            </li>
            <li>
              <img
                src={logo6}
                className="logo"
                height="50px"
                width="55px"
                alt="Linked in"
              />
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default DisplayList;
