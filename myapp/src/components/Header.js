import React from "react";
import "../css/Header.css";

import Logo from "./Logo";
import Menu from "./menu/Menu";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-1 col-sm-2 col-xl-1">
            <Logo />
          </div>
          <nav className="row col-9 col-sm-9 col-xl-10">
            <Menu />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
