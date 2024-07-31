import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prevState => [...prevState, product.id]); // Add the product ID to the array
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>₹ {product.price}</p>
          {addedToCart.includes(product.id) ? (
            <button className='add_cart' onClick={handleGoToCart}>Go to Cart</button>
          ) : (
            <button className='add_cart' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
