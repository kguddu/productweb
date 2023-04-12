import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <>
    
    <div className="cart-container">
    <div className="items_card">
    <div className="cart-items ">
    <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => removeFromCart(item)}>Remove Item</button>
    </div>
    </div>
    </div>
    
    </>
  );
};

export default CartItem;
