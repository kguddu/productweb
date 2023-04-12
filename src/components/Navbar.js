import React from "react";

const Navbar = ({ setActiveSection, cartItemsCount }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setActiveSection("home")}>Home</li>
        <li onClick={() => setActiveSection("product")}>Product</li>
        <li onClick={() => setActiveSection("cart")}>
          Cart
          {cartItemsCount > 0 && <span className="cart-item-count">{cartItemsCount}</span>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
