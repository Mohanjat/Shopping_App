import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity, totalPrice, clearCart }) => {
  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p className='empty_cart' >Your cart is empty</p>
      ) : (
 
        <div className='all_cart' >

        <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: 
                    <input 
                      type="number" 
                      value={item.quantity} 
                      min="1"
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    />
                  </p>
                  <button className='remove_btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
            <button className="buy-now-button">Buy Now</button>
          </div>

        </div>

      )}
    </div>
  );
};

export default Cart;
