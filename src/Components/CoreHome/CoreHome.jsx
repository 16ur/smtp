import React from "react";
import "./CoreHome.css";
import smtp_big from "../../assets/smtp-big.png";

const CoreHome = () => {
  return (
    <div className="corehome">
      <h1>CoreHome</h1>
      <img src={smtp_big} alt="Logo" className="logoBig" />
    </div>
  );
};

export default CoreHome;
