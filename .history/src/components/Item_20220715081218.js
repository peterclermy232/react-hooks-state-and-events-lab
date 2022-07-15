import React from "react";

function Item({ name, category }) {
  const [isInCart] = useState(false);

  function handleA(params) {
    
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;