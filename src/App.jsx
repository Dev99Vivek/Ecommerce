import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";
import { useEffect } from "react";
import Productdetail from "./Productdetail";
import Addtocart from "./Addtocart";
function App() {
  const [products, setProduct] = useState([]) 
  const [cartItem ,setCartItem]=useState([])
  const productApi = async () => {

    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
  }

  useEffect(() => {
    productApi()
  }, [products])
  const handelCartItem = (product) => {
   const updateItem = [...cartItem, product ]
    setCartItem(updateItem);
  }

  return (
    <>
      {/* <Header />
      <Card />
      <Footer /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Card" element={<Card products={ products} />} ></Route>      
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="productsdetail/:id" element={<Productdetail products={products} handelCartItem={handelCartItem} />} />
          <Route path="Addtocart" element={<Addtocart cartItem={cartItem} products={products} />}></Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
