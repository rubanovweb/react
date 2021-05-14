import React from "react";

import "../../css/Main/Catalog.css";
import dataCards from "./dataCards";
import Card from "./Card";

function Catalog() {
  const cardItems = dataCards.map((elem) => <Card item={elem} key={elem.id} />);

  return (
    <section id="catalog" className="Catalog">
      <div className="container">
        <div className="row">
          <h2 className="col-12 section-title">Популярные интернет-магазины</h2>
          <div className="category col-4">
            <p>Выберите категорию: </p>
            <select id="categoryList" className="category-list">
              <option value="all">Все магазины</option>
              <option value="marketplace">Маркетплейс</option>
              <option value="tech">ИМ техники</option>
              <option value="books">ИМ книг</option>
            </select>
          </div>
          <div className="cards col-12">{cardItems}</div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
