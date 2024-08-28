import React from 'react'

function Home() {
  return (
      <div>
          <div className="container">
              <section className="hero">
                  <h1>Welcome to Our Website</h1>
                  <p>Your one-stop solution for all your needs.</p>
                  <li className="btn">Learn More</li>
              </section>

              <section id="about" className="about">
                  <h2>About Us</h2>
                  <p>We are a leading company with years of experience in delivering top-notch services to our clients. Our mission is to provide quality and value in everything we do.</p>
              </section>

              <section className="services">
                  <h2>Our Services</h2>
                  <div className="service-box">
                      <h3>Web Development</h3>
                      <p>We create stunning and responsive websites tailored to your business needs.</p>
                  </div>
                  <div className="service-box">
                      <h3>App Development</h3>
                      <p>Our team develops user-friendly mobile applications for both Android and iOS platforms.</p>
                  </div>
                  <div className="service-box">
                      <h3>Digital Marketing</h3>
                      <p>Boost your online presence with our comprehensive digital marketing strategies.</p>
                  </div>
              </section>
          </div>
    </div>
  )
}

export default Home