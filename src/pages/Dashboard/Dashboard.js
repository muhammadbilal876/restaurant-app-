import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Frontend/components/Footer';
import Header from '../Frontend/components/Header';
import { AuthContext } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '../assets/samosa.jpeg';
import image2 from '../assets/lobster.jpg';
import image3 from '../assets/malabar.jpeg';
import image4 from '../assets/prwan.jpg';
import image5 from '../assets/rasam.jpg';
import image6 from '../assets/sambar.jpg';
import image7 from '../assets/tandori.jpeg';
import image8 from '../assets/jalebe.jpg';

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(cartItem => cartItem.id === item.id);

    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    toast.success(`${item.name} has been added to your cart.`);
  };

  const items = [
    { id: 1, name: 'Mutton Samosa', description: 'Spicy and hot', image: image1, price: 5 },
    { id: 2, name: 'Lobster Dry', description: 'Spicy and hot', image: image2, price: 15 },
    { id: 3, name: 'Mutton Paya', description: 'Spicy and hot', image: image3, price: 10 },
    { id: 4, name: 'Prawn', description: 'Spicy', image: image4, price: 12 },
    { id: 5, name: 'Rasam', description: 'Spicy', image: image5, price: 7 },
    { id: 6, name: 'Sambar Sadham', description: 'With papadam', image: image6, price: 8 },
    { id: 7, name: 'Tandoori', description: 'Spicy and hot', image: image7, price: 10 },
    { id: 8, name: 'Jalebi', description: 'Traditional sweet', image: image8, price: 5 },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <div className="container">
            <h1 className="text-center mt-5">Our Hot Dishes</h1>
            <hr />
            <div className="row mt-4">
              {items.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-3 mb-4">
                  <div className="card">
                    <img src={item.image} alt={item.name} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">${item.price.toFixed(2)}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
