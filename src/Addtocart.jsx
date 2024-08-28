import React from 'react';

function Addtocart({ cartItem, onRemove, onIncrease, onDecrease }) {
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItem.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                cartItem.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-details">
                            <h4>{item.title}</h4>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <div className="quantity-control">
                                <button onClick={() => onDecrease(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => onIncrease(item)}>+</button>
                            </div>
                        </div>
                        {item.discount && (
                            <div className="discount-badge">{item.discount}% OFF</div>
                        )}
                        <button
                            className="remove-button"
                            onClick={() => onRemove(item)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Addtocart;
