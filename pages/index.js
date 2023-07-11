import React, { useState, useEffect } from 'react';
import '../public/styles.css';

import Cart from '../pages/components/cart';
import Link from 'next/link';
import ProductCard from '../pages/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // Increment the quantity of the existing item in the cart
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Add the product as a new item in the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  // ...

  const incrementItem = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id ? { ...product, quantity: (product.quantity || 0) + 1 } : product
    );
    setCart(updatedCart);
  };

  const decrementItem = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id ? { ...product, quantity: Math.max(0, product.quantity - 1) } : product
    );
    setCart(updatedCart);
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div className="w-2/3  ms-11 container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="ms-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <Cart
        cartItems={cart}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        removeItem={removeItem}
      />
    </div>
  );
}
