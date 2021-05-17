import React from "react";

function ItemMenu(props) {
  return (
    <li className="ItemMenu">
      <a href={props.item.link}>{props.item.name}</a>
    </li>
  );
}

export default ItemMenu;
