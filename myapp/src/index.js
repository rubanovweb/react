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

const catalog = document.getElementById("catalog");
const blog = document.getElementById("blog");
const faq = document.getElementById("faq");
const about = document.getElementById("about");

const arrowTop = document.querySelector(".ArrowTop");

const linkCatalog = document.querySelector("[href='#catalog']");
const linkBlog = document.querySelector("[href='#blog']");
const linkFaq = document.querySelector("[href='#faq']");
const linkAbout = document.querySelector("[href='#about']");
const linkContacts = document.querySelector("[href='#contacts']");

const categoryList = document.getElementById("categoryList");
const cardImages = document.querySelectorAll(".card-image");

for (let img of cardImages) {
  img.addEventListener("click", (e) => {
    openOriginalImage(e.target);

    document.getElementById("btnClose").addEventListener("click", () => {
      if (document.querySelector(".bg-shadow")) {
        document
          .querySelector(".image-container")
          .classList.remove("animate__zoomIn");
        document
          .querySelector(".image-container")
          .classList.add("animate__zoomOut");
        setTimeout(() => {
          document.querySelector(".bg-shadow").remove();
        }, 500);
      }
    });
  });
}

function openOriginalImage(img) {
  const bgShadow = document.createElement("div");
  bgShadow.classList.add("bg-shadow");
  document.body.insertAdjacentElement("afterbegin", bgShadow);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(
    "image-container",
    "animate__animated",
    "animate__zoomIn"
  );
  bgShadow.prepend(imgContainer);

  const originalImg = document.createElement("img");
  originalImg.src = img.src;
  originalImg.alt = img.alt;
  originalImg.classList.add("original-image");

  imgContainer.prepend(originalImg);

  const close = document.createElement("button");
  close.id = "btnClose";
  close.classList.add("btn-close");
  imgContainer.prepend(close);
}

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    arrowTop.classList.add("animate__zoomIn");
    arrowTop.classList.remove("hidden");
  } else {
    arrowTop.classList.remove("animate__zoomIn");
    arrowTop.classList.add("hidden");
  }
});

arrowTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

linkCatalog.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

linkBlog.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, catalog.offsetHeight);
});

linkFaq.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, catalog.offsetHeight + blog.offsetHeight);
});

linkAbout.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(
    0,
    catalog.offsetHeight + blog.offsetHeight + faq.offsetHeight
  );
});

linkContacts.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(
    0,
    catalog.offsetHeight +
      blog.offsetHeight +
      faq.offsetHeight +
      about.offsetHeight
  );
});

categoryList.addEventListener("input", () => {
  showCards(categoryList.value);
});

function showCards(catId) {
  for (let card of document.querySelectorAll(".card")) {
    if (catId === "all") {
      card.classList.remove("hidden");
    } else {
      if (catId === card.dataset.category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  }
}
