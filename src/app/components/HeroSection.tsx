"use client"
import React, { useState } from "react";
import styles from "../styles/HeroSection.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <section className={styles.hero}>
      <video className={styles.backgroundVideo} autoPlay muted loop>
        <source src="/backing.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Delicious Cakes for Every Occasion</h1>
          <p className={styles.tagline}>
            Order your custom cake today and make every event special!
            We provide a variety of flavors and designs. Whether it's a birthday, wedding, or any celebration, we have got the perfect cake for you.
          </p>
          <button className={styles.ctaButton} onClick={handleButtonClick}>Order Now</button>
        </div>
        <div className={styles.icons}>
          <a href="#" className={styles.iconLink}><FaFacebookF /></a>
          <a href="#" className={styles.iconLink}><FaInstagram /></a>
          <a href="#" className={styles.iconLink}><FaTwitter /></a>
          <a href="#" className={styles.iconLink}><FaPinterest /></a>
        </div>
      </div>

      {isFormVisible && (
        <div className={styles.formModal}>
          <div className={styles.formContent}>
            <h2>Order Form</h2>
            <form>
              <label>
                Name:
                <input type="text" placeholder="Enter your name" required className={styles.input} />
              </label>
              <label>
                Email:
                <input type="email" placeholder="Enter your email" required className={styles.input} />
              </label>
              <label>
                Cake Type:
                <select required className={styles.select} defaultValue="">
                  <option value="" disabled>Select a cake type</option>
                  <option value="chocolate">Chocolate</option>
                  <option value="vanilla">Vanilla</option>
                  <option value="red-velvet">Red Velvet</option>
                  <option value="black-forest">Black Forest</option>
                </select>
              </label>
              <button type="submit" className={styles.submitButton}>Submit Order</button>
              <button type="button" onClick={handleCloseForm} className={styles.closeButton}>Close</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
