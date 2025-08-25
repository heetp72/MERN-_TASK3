import React from "react";

const ItemList = ({ items }) => {
  return (
    <ul className="item-list">
      {items.length > 0 ? (
        items.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <p className="no-results">No results found</p>
      )}
    </ul>
  );
};

export default ItemList;
