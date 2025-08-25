import React, { useState } from "react";
import SearchBar from "./component/SearchBar";
import ItemList from "./component/ItemList";
import "./App.css"; // apply styles

const App = () => {
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h2 className="app-title">🍓 Search Filter</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default App;
