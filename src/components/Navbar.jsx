import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation(); // Get current location

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submit logic if necessary
  };

  const isCartPage = location.pathname === '/cart'; // Check if on cart page

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/Shopping_App/">Shopping App</Link>
      </div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <div className="navbar-buttons">
        <Link to="/Shopping_App/" className="navbar-button home-button">
          Home
        </Link>
        {!isCartPage && (
          <Link to="/cart" className="navbar-button cart-button">
            <FaShoppingCart className="cart-icon" />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
