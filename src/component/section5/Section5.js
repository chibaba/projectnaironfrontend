import React from "react";

import { Link } from "react-router-dom";

import "./Section5.css";

import logo10 from "../../img/sam.jpeg";

const Section5 = () => {
  return (
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

      <section className="services">
        <div className="container wow fadeIn">
          <div className="section-header">
            <h3 className="section-title">Services</h3>
            <p className="section-description">
              "My people, we're excited to back such people in one of the
              worlds's fastest growing regions. Nairon is highly technical and
              fanatically customer oriented."
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="box">
                <div className="icon">
                  <Link>
                    <i class="fa fa-desktop"></i>
                  </Link>
                </div>
                <p className="description">
                  My people, we're excited to back such people in one of the
                  worlds's fastest growing regions. Nairon is highly technical
                  and fanatically customer oriented."
                </p>
                <img src={logo10} className="nothing-yet" alt="sam-icon" />
                <h4 className="title">
                  <Link>Sam Emmanuel</Link>
                </h4>
                <p>CEO, Semicolon</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="box">
                <div className="icon">
                  <Link>
                    <i class="fa fa-bar-chart"></i>
                  </Link>
                </div>
                <img src={logo10} className="Not-yet" alt="sam-icon"></img>
                <p className="description">
                  My people, we're excited to back such people in one of the
                  worlds's fastest growing regions. Nairon is highly technical
                  and fanatically customer oriented."
                </p>
                <h4 className="title">
                  <Link>Sam Emmanuel</Link>
                </h4>
                <p>CEO, Semicolon</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="box">
                <div className="icon">
                  <Link>
                    <i class="fa fa-paper-plane"></i>
                  </Link>
                </div>
                <p className="description">
                  My people, we're excited to back such people in one of the
                  worlds's fastest growing regions. Nairon is highly technical
                  and fanatically customer oriented."
                </p>
                <img src={logo10} className="nothing-yet" alt="sam-icon" />
                <h4 className="title">
                  <Link>Sam Emmanuel</Link>
                </h4>
                <p>CEO, Semicolon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
