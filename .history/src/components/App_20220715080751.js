import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>{isDarkMode ? "Dark" : "L"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
