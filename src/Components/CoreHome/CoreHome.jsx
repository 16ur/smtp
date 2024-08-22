import React from "react";
import "./CoreHome.css";
import smtp from "../../assets/smtp-big.png";
import smtp_evan from "../../assets/smtp-sans.png";

const CoreHome = () => {
  return (
    <div className="corehome">
      <img src={smtp_evan} alt="Logo" className="logoCore" />
      <h1 className="titleCore">
        Le blog qui parle de <span style={{ color: "#0f46d8" }}>claviers</span>.
      </h1>
    </div>
  );
};

export default CoreHome;
