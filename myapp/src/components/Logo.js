import React from "react";

import logo from "../img/logo.svg";
import "../css/Logo.css";

function Logo() {
  return (
    <a href="/">
      <img className="Logo" src={logo} alt="Логотип" />
    </a>
  );
}

export default Logo;
