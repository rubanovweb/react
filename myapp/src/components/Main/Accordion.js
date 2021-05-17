import React, { Component } from "react";
import "../../css/Main/Accordion.css";

import dataAccordion from "./dataAccordion";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {
  constructor() {
    super();
    this.name = "Accordion";
  }

  render() {
    const accordionItems = dataAccordion.map((elem) => (
      <AccordionItem item={elem} key={elem.id} />
    ));

    return (
      <div className="accordion col-12 col-lg-9" id={this.props.id}>
        {accordionItems}
      </div>
    );
  }
}

export default Accordion;
