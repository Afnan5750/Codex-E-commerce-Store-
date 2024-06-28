import React from 'react';
import Product from './Product';
import '../styles/ProductList.css';

const productImages = {
  1: 'src/assets/s1.png',
  2: 'src/assets/s2.png',
  3: 'src/assets/s3.png',
  4: 'src/assets/s4.png',
  5: 'src/assets/s5.png',
  6: 'src/assets/s6.png',
  7: 'src/assets/s7.png',
  8: 'src/assets/s8.png',
  9: 'src/assets/s9.png',
  10: 'src/assets/s10.png',
  11: 'src/assets/s11.png',
  12: 'src/assets/s12.png',
  13: 'src/assets/s13.png',
  14: 'src/assets/s14.png',
};

const products = [
    { id: 1, name: 'Hicking Shoes', price: 500 },
    { id: 2, name: 'White Sneakers', price: 1300 },
    { id: 3, name: 'Woman Sandle', price: 2550 },
    { id: 4, name: 'Outdoor Running Shoes', price: 1500 },
    { id: 5, name: 'Sandle', price: 2000 },
    { id: 6, name: 'Canvas Shoes', price: 1500 },
    { id: 7, name: 'Home Chappal', price: 3600 },
    { id: 8, name: 'Running Sneakers', price: 1350 },
    { id: 9, name: 'White Sneakers', price: 2400 },
    { id: 10, name: 'Walking Shoes', price: 5500 },
    { id: 11, name: 'Running Sneakers', price: 1000 },
    { id: 12, name: 'Sports Shoes', price: 4000 },
    { id: 13, name: 'Woman Chappal', price: 2200 },
    { id: 14, name: 'Stylish Chappal', price: 1850 }
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          image={productImages[product.id]} 
        />
      ))}
    </div>
  );
};

export default ProductList;
