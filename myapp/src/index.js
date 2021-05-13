import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import ArrowTop from "./components/ArrowTop";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
    <ArrowTop />
  </React.StrictMode>,
  document.getElementById("root")
);

document.querySelector(".ArrowTop").addEventListener("click", () => {
	window.scrollTo(0, 0);
})

window.addEventListener("scroll", () => {
	if(window.pageYOffset > 300) {
		document.querySelector(".ArrowTop").classList.add("animate__zoomIn");
		document.querySelector(".ArrowTop").classList.remove("hidden");
	}
	else {
		document.querySelector(".ArrowTop").classList.remove("animate__zoomIn");
		document.querySelector(".ArrowTop").classList.add("hidden");
	}
})
