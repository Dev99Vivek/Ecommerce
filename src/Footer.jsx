import React from 'react'

function Footer() {
  return (
      <div>
          <footer class="footer">
              <div class="footer-content">
                  <div class="footer-section about">
                      <h3>About Us</h3>
                      <p>
                          We are a team of passionate developers dedicated to creating innovative and user-friendly web solutions.
                      </p>
                      <div class="socials">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                          <a href="#"><i class="fa fa-instagram"></i></a>
                          <a href="#"><i class="fa fa-linkedin"></i></a>
                      </div>
                  </div>

                  <div class="footer-section links">
                      <h3>Quick Links</h3>
                      <ul>
                          <li><a href="#home">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#services">Services</a></li>
                          <li><a href="#contact">Contact</a></li>
                      </ul>
                  </div>

                  <div class="footer-section contact">
                      <h3>Contact Us</h3>
                      <p>Email: info@mywebsite.com</p>
                      <p>Phone: +123 456 7890</p>
                  </div>
              </div>

              <div class="footer-bottom">
                  &copy; 2024 MyWebsite | All Rights Reserved
              </div>
          </footer>

    </div>
  )
}

export default Footer