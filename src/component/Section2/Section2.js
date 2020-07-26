import React from "react";
import { Link } from "react-router-dom";
import "./Section2.css";

import logo7 from "../../img/Group 54.png";
import logo8 from "../../img/Group 55.png";
import logo9 from "../../img/Group 56.png";

function Section2() {
  return (
    <section id="services">
      <div className="container wow fadeIn">
        <div className="section-header">
          <h3 className="section-title">Create.Curate.Convert</h3>
          <p className="section-description">
            {" "}
            its our mission to help in real time conversion measurement*
          </p>
          <p className="section-description">
            {" "}
            Connecting with customers is more important than ever*
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <div className="icon">
                <Link>
                  <i class="fa fa-desktop"></i>
                </Link>
              </div>
              <h4 className="title">
                <img src={logo7} className="App-logo" alt="Group54" />
              </h4>
              <h5 className="description">Trusted and Secure</h5>

              <p className="description">
                We store the vast majority of the digital assets
              </p>
              <p className="description">in secure offline cold storage</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="box">
              <div className="icon">
                <Link>
                  <i class="fa fa-bar-chart"></i>
                </Link>
              </div>
              <h4 className="title">
                <img src={logo8} className="App-logo" alt="Group55" />
              </h4>
              <h5 className="description">Delightful Experience</h5>
              <p className="description">
                Our charting tools and simple ordering process will
              </p>
              <p className="description">get you advertising from day one</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="box">
              <div className="icon">
                <Link>
                  <i class="fa fa-paper-plane"></i>
                </Link>
              </div>
              <h4 className="title">
                <img src={logo9} className="App-logo" alt="Group56" />
              </h4>
              <h5 className="description">Beginner Friendly</h5>
              <p className="description">
                We offer an intuitive, beginner friendly
              </p>
              <p className="description">interface and 247 support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
