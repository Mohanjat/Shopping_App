import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 40, image: 'https://via.placeholder.com/150' },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    toast.error('Item removed from cart');
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    
      <div className="app">
        <Navbar cartItemCount={cartItems.length} />
        <ToastContainer />
        <Routes>
          <Route path="/Shopping_App/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} totalPrice={totalPrice} />} />
        </Routes>
      </div>
    
  );
};

export default App;
