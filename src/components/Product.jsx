import React from 'react';
import '../styles/Product.css';

const Product = ({ product, onAddToCart, image }) => {
  return (
    <div className="product">
      <img src={image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>RS.{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
