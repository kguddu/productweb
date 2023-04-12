import React from "react";
import './ProductCard.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <>
    
    <section className="container">
      <div className="product-card">
        <div className="card">
        <img src={product.image} alt="img"/>
      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
     <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    </div>
    </section>
    
    
    </>
  );
};

export default ProductCard;
