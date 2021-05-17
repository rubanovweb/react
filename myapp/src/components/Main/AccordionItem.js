import React, { Component } from "react";

class AccordionItem extends Component {
  constructor() {
    super();
    this.name = "item";
  }

  render() {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={this.props.item.headerId}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + this.props.item.id}
            aria-controls={"collapse" + this.props.item.id}
            aria-expanded={this.props.item.isOpened}
          >
            {this.props.item.question}
          </button>
        </h2>
        <div
          id={"collapse" + this.props.item.id}
          class="accordion-collapse collapse"
          aria-labelledby={this.props.item.headerId}
          data-bs-parent="#accordFaq"
        >
          <div class="accordion-body">{this.props.item.answer}</div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
