import React, { Component } from "react";
import LanguageIcon from "@mui/icons-material/Language";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <span className="hr"></span>
          <h4>Questions? Contact us.</h4>
          <div className="box-foot">
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
            <ul>
              <li>Help Center</li>
              <li>Investor Relations</li>
              <li>Corporate Information</li>
              <li>Legal Notices</li>
            </ul>
            <ul>
              <li>Account</li>
              <li>Jobs</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="select-foot">
            <span>
              <LanguageIcon />
            </span>
            <select>
              <option value="eng">eng</option>
              <option value="rus">rus</option>
              <option value="uzb">uzb</option>
            </select>
          </div>
          <h4>&copy; Copyright {new Date().getFullYear()}</h4>
        </footer>
      </div>
    );
  }
}
