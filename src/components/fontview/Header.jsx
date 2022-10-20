import React, { Component } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import Modal from "./Modal";

export default class Header extends Component {

  openModal=()=>{
    console.log('bosdin');
    this.props.enter()
  }


  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="logo-nav">
              <a href="#!">
                <img
                  src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                  alt="logoIMg"
                />
              </a>
            </div>
            <div className="right-nav">
              <div className="select-nav">
                <span>
                  <LanguageIcon />
                </span>
                <select>
                  <option value="eng">eng</option>
                  <option value="rus">rus</option>
                  <option value="uzb">uzb</option>
                </select>
              </div>
              <button className="btn-nav"
                onClick={this.openModal}
              >sign in</button>
              {
                this.props.qiymat ? <Modal /> : ''
              }
            </div>
          </nav>
          <div className="header-info">
            <h2>
              Unlimited movies, TV <br /> shows, and more.
            </h2>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <button className="head-btn"
                onClick={this.openModal}

            >get started</button>
          </div>
        </header>
      </div>
    );
  }
}
