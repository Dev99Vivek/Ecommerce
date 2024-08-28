import React from "react";
import { useParams } from "react-router-dom";
import './Productdetail.css';

function ProductDetail({ products, handelCartItem }) {
  const { id } = useParams();
  const findData = products.find((i) => i.id == id);

  if (!findData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={findData.image} alt={findData.title} />
      </div>
      <div className="product-detail-content">
        <h1 className="product-detail-title">{findData.title}</h1>
        <h2 className="product-detail-category">{findData.category}</h2>
        <p className="product-detail-price">Price: ${findData.price.toFixed(2)}</p>
        <p className="product-detail-description">{findData.description}</p>
        <button className="product-detail-button" onClick={() => handelCartItem(findData)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
