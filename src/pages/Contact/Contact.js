import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Store Info */}
        <div className="contact-info">
          <h2>Store Information</h2>
          <p><strong>Address:</strong> 123 E-commerce Ave, Tech City, BD</p>
          <p><strong>Email:</strong> support@yourstore.com</p>
          <p><strong>Phone:</strong> +880 1234 567 890</p>
          <p><strong>Hours:</strong> Mon - Sat: 9AM - 8PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

