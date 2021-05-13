import React from "react";
import "../css/Footer.css";

import Logo from "./Logo";

function Footer() {
  return (
    <footer>
			<div className="container">
				<div className="row justify-content-between align-items-center">
						<p className="copyright col-9">Copyright &copy; 2021 Все права защищены</p>
					<div className="col-1">
						<Logo />
					</div>
				</div>
			</div>
    </footer>
  );
}

export default Footer;
