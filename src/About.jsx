import React from 'react'

function About() {
  return (
      <div>
          <div className="about-container">
              <section className="about">
                  <h2>About Us</h2>
                  <p>We are a passionate team dedicated to delivering excellence in every project we undertake. With years of experience, we provide innovative solutions that meet the unique needs of our clients.</p>
                  <p>Our mission is to continuously evolve and stay ahead in our industry, ensuring that our clients receive the best service possible. We believe in the power of collaboration and strive to build long-lasting relationships with our clients.</p>
              </section>

              <section className="team">
                  <h2>Our Team</h2>
                  <div className="team-member">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s" alt="Team Member 1"/>
                          <h3>John Doe</h3>
                          <p>CEO & Founder</p>
                  </div>
                  <div className="team-member">
                      <img src="https://img.freepik.com/premium-photo/portrait-handsome-man-with-beard_1249787-12073.jpg" alt="Team Member 2"/>
                          <h3>Jane Smith</h3>
                          <p>Lead Developer</p>
                  </div>
                  <div className="team-member">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s" alt="Team Member 3"/>
                          <h3>Mike Johnson</h3>
                          <p>Project Manager</p>
                  </div>
              </section>
          </div>
          </div>
  )
}

export default About