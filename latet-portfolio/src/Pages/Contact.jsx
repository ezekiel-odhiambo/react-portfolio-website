import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"; // Import solid icon
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS
import { animateScroll as scroll } from 'react-scroll'; // Import animateScroll from react-scroll

import "../Styles/ContactPage.css"; // Import your CSS file for styling

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Here you can implement the logic to send the form data to your backend or handle it as needed

    setTimeout(() => {
      setIsSending(false);
      // Reset form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="contact-page">
      <h2 className="contact-heading" onClick={scrollToTop}>Get in touch</h2> {/* Added onClick event to scroll to top */}
      <div className="contact-columns">
        <div className="contact-info">
          <a href="tel:+254 714 402 735">
            <FontAwesomeIcon icon={faPhoneAlt} /> +1 123 456
          </a>
          <a
            href="https://www.facebook.com/zaki.nestpaschaud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=0714402735"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/your-instagram-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </div>
        <div className="separator"></div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-input"
                style={{ height: "150px" }} // Increased height of the textarea
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`submit-button ${isSending && "sending"}`}
                style={{ width: "150px", fontSize: "16px" }} // Adjusted styling for the button
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
