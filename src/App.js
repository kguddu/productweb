import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import axios from "axios";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch products from API on component mount
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <h1>Home Page</h1>;
      case "product":
        return (
          <div>
            <h1>Product Page</h1>
            <div className="product-list">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        );
      case "cart":
        return (
          <div>
            <h1>Cart Page</h1>
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <div className="cart-item-list">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            )}
          </div>
        );
      default:
        return <h1>Page not found</h1>;
    }
  };

  return (
    <div>
      {/* Render Navbar component */}
      <Navbar setActiveSection={setActiveSection} />

      {/* Render active section */}
      {renderSection()}
    </div>
  );
};

export default App;
