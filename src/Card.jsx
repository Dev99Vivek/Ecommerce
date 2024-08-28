import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card({products}) {
    // const products = [
    //     { id: 1, url: 'https://cdn.pixabay.com/photo/2016/12/26/06/16/i-phone-1931557_1280.jpg', CompName: 'ABC Electronics', ProductName: 'Smartphone X', price: 599.99, priceOff: 50.00, description: 'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
    //     { id: 2, url: 'https://cdn.pixabay.com/photo/2020/01/15/06/36/acer-aspire-5700-4766992_640.jpg', CompName: 'Tech Innovators', ProductName: 'Laptop Pro', price: 1299.99, priceOff: 100.00, description: 'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
    //     { id: 3, url: 'https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg', CompName: 'Fashion Haven', ProductName: 'Stylish Watch', price: 89.99, priceOff: 10.00, description: 'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
    //     { id: 4, url: 'https://cdn.pixabay.com/photo/2019/04/28/22/00/heating-costs-4164538_640.jpg', CompName: 'Home Essentials', ProductName: 'Smart Thermostat', price: 149.99, priceOff: 15.00, description: 'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
    //     { id: 5, url: 'https://cdn.pixabay.com/photo/2016/04/12/14/31/backpack-1324445_640.jpg', CompName: 'Outdoor Adventures', ProductName: 'Hiking Backpack', price: 49.99, priceOff: 5.00, description: 'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
    //     { id: 6, url: 'https://cdn.pixabay.com/photo/2016/12/13/12/37/heart-rate-monitoring-device-1903997_640.jpg', CompName: 'Fitness Gear Co.', ProductName: 'Fitness Tracker', price: 79.99, priceOff: 7.00, description: 'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
    // ];
  
    
    
  return (
      <div className="product-list">
          {products.map((product) => (
              <div key={product.id} className="card">
                  <img src={product.image} alt={product.category} className="product-image" />
                  <div className="card-content">
                      <h6 className="company-name">{product.title}</h6>
                      <h5 className="product-name">{product.category}</h5>
                      <p className="price">Price: ${product.price.toFixed(2)}</p>
                      <Link to={`/productsdetail/${product.id}`}><button>See More</button></Link> 
                  </div>
              </div>
          ))}
      </div>
  )
}

export default Card