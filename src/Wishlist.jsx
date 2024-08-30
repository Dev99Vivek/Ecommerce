import React from 'react';

function Wishlist({ cartItem, onRemove, onIncrease, onDecrease }) {
    return (
        <div className="cart-container">
            <h2>Your Wishlist</h2>
            {cartItem.length === 0 ? (
                <p className="empty-cart">Your wishlist is empty</p>
            ) : (
                cartItem.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-details">
                            <h4>{item.title}</h4>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <button className="remove-button" onClick={() => onRemove(item)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Wishlist;
