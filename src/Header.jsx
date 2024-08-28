import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">MyWebsite</div>
                <ul className="nav-links">
                    <Link to="/" className="nav-item">
                        <li>Home</li>
                    </Link>
                    <Link to="/About" className="nav-item">
                        <li>About</li>
                    </Link>
                    <Link to="/Card" className="nav-item">
                        <li>Product</li>
                    </Link>
                    <Link to="/Contact" className="nav-item">
                        <li>Contact</li>
                    </Link>
                    <Link to="/Addtocart" className="nav-item">
                        <li>Add to cart</li>
                    </Link>
                </ul>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </div>
    )
}

export default Header