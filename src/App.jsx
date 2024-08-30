import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Productdetail from "./Productdetail";
import Addtocart from "./Addtocart";
import Wishlist from "./Wishlist";

function App() {
  const [products, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const productApi = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json));
  };

  useEffect(() => {
    productApi();
  }, []); // Corrected dependency array to avoid infinite loop

  const handelCartItem = (product) => {
    const updateItem = [...cartItem, product];
    setCartItem(updateItem);
  };

  const handelCartItems = (product) => {
    const updateWishlist = [...wishlist, product];
    setWishlist(updateWishlist);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Card" element={<Card products={products} />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route
            path="productsdetail/:id"
            element={<Productdetail products={products} handelCartItem={handelCartItem} handelCartItems={handelCartItems} />}
          />
          <Route path="Addtocart" element={<Addtocart cartItem={cartItem} products={products} />} />
          <Route
            path="Wishlist"
            element={<Wishlist cartItem={wishlist} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
