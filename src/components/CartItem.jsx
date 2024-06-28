import React from "react";
import "../styles/CartItem.css";

const CartItem = ({ item, onAddToCart, onRemoveFromCart, image }) => {
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={image} alt={item.name} />
      <div className="cart-item-details">
        <div className="item-info">
          <h3 className="cart-item-name">{item.name}</h3>
          <p className="cart-item-price">Price: RS.{item.price}</p>
        </div>
        <div className="quantity-container">
          <button
            className="action-button"
            onClick={() => onRemoveFromCart(item)}
          >
            -
          </button>
          <p className="cart-item-quantity">{item.quantity}</p>
          <button className="action-button" onClick={() => onAddToCart(item)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
