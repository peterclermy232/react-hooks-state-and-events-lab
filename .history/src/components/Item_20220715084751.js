import React from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
    
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {isInCart ? "Remove From" : ""}
      </button>
    </li>
  );
}

export default Item;
