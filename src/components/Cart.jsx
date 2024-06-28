import React from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";

const productImages = {
  1: "src/assets/s1.png",
  2: "src/assets/s2.png",
  3: "src/assets/s3.png",
  4: "src/assets/s4.png",
  5: "src/assets/s5.png",
  6: "src/assets/s6.png",
  7: "src/assets/s7.png",
  8: "src/assets/s8.png",
  9: "src/assets/s9.png",
  10: "src/assets/s10.png",
  11: "src/assets/s11.png",
  12: "src/assets/s12.png",
  13: "src/assets/s13.png",
  14: "src/assets/s14.png",
};

const Cart = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>The cart is empty</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          image={productImages[item.id]}
        />
      ))}
      <h3>
        Total: RS.
        {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};

export default Cart;
