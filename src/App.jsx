import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? { ...exists, quantity: exists.quantity - 1 } : item
      ));
    }
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
