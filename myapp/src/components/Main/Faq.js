import React from "react";

import "../../css/Main/Faq.css";
import Accordion from "./Accordion.js";

function Faq() {
  return (
    <section id="faq" className="Faq">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="col-12 section-title">Часто задаваемые вопросы</h2>
          <Accordion id="accordFaq" />
        </div>
      </div>
    </section>
  );
}

export default Faq;
