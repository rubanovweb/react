import React from "react";
import "../../css/Menu.css";

import ItemMenu from "./ItemMenu";
import dataMenu from "./dataMenu";

function Menu() {
  const menuItems = dataMenu.map((elem) => (
    <ItemMenu item={elem} key={elem.id} />
  ));

  return <ul className="Menu">{menuItems}</ul>;
}

export default Menu;
