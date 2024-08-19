import React from "react";
import "./Navbar.css";
import smtp_big from "../../assets/smtp-big.png";
import toggleNight from "../../assets/night.png";
import searchBlack from "../../assets/search-b.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={smtp_big} alt="Logo" className="logoBig" />

        <ul className="mainElements">
          <li>articles</li>
          <li>adef</li>
          <li>about</li>
        </ul>

        <div className="icon-container">
          <img src={searchBlack} alt="Search" className="searchBlackIcon" />
          <img
            src={toggleNight}
            alt="Toggle Night"
            className="toggleNightIcon"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
