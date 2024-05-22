import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
      <footer className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Contact</li>
            <li className="menuItem">Ads</li>
            <li className="menuItem">FAQ</li>
          </ul>
          <div className="infoText">
            Welcome to CineFy, your ultimate destination for movie lovers! At
            CineFy, we bring you an unparalleled cinematic experience right at
            your fingertips. Our platform offers a vast collection of movies
            from various genres and languages, ensuring there's something for
            everyone. Whether you're into the latest blockbusters, timeless
            classics, or indie gems, CineFy has it all.
          </div>
          <div className="socialIcons">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </ContentWrapper>
      </footer>
    );
};

export default Footer;
