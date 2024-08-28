import React from 'react'

function Contact() {
  return (
      <div>
          <div class="contact-container">
              <section class="contact-info">
                  <h2>Contact Us</h2>
                  <p>If you have any questions, feel free to reach out to us. We’d love to hear from you!</p>
                  <ul>
                      <li><strong>Email:</strong> contact@yourdomain.com</li>
                      <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                      <li><strong>Address:</strong> 123 Your Street, City, Country</li>
                  </ul>
              </section>

              <section class="contact-form">
                  <h2>Send Us a Message</h2>
                  <form action="#" method="POST">
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="name" required/>

                          <label for="email">Email:</label>
                          <input type="email" id="email" name="email" required/>

                              <label for="message">Message:</label>
                              <textarea id="message" name="message" rows="5" required></textarea>

                              <button type="submit">Send Message</button>
                          </form>
                      </section>
                  </div>
          </div>
         
  )
}

export default Contact