import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartItems() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleQuantityChange = (itemId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Item removed from cart.');
  };

  const handlePlaceOrder = () => {
    if (!isAuthenticated) {
      toast.error('You must be logged in to place an order.');
      return;
    }
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(cart);
    localStorage.setItem('orders', JSON.stringify(orders));

    toast.success('Order placed successfully.');
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="container mt-5">
      <h1>Cart Items</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-secondary me-2"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger mt-3"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h3>Order Summary</h3>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="btn btn-primary" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
