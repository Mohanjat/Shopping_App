import React from 'react';
import ProductList from '../components/ProductList';


const Home = ({ products, addToCart }) => {
  return (
    <div className="home">
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
