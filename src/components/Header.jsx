import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ cartItems }) => {
  return (
    <header>
      <h1>E-commerce Store</h1>
      <nav>
        <Link to="/">Products</Link>
        <Link
          to="/cart"
          style={{ position: "relative", display: "inline-block" }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span
            style={{
              position: "absolute",
              top: "-16px",
              right: "-2px",
              borderRadius: "50%",
              color: "white",
              padding: "2px 5px",
              fontSize: "12px",
            }}
          >
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
