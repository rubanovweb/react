import React from "react";

import Catalog from "./Catalog";
import Blog from "./Blog";
import Faq from "./Faq";
import About from "./About";
import Contacts from "./Contacts";

function Main() {
  return (
    <main>
      <Catalog />
      <Blog />
      <Faq />
      <About />
      <Contacts />
    </main>
  );
}

export default Main;
