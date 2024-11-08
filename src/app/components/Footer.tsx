"use client";
import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.description}>
          <FontAwesomeIcon icon={faCakeCandles} className={styles.cakeIcon} />
          
          <p>
            Indulge in our freshly baked cakes and pastries made with love and
            the finest ingredients. Your sweet moments start here!
          </p>
        </div>
        <div className={styles.links}>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#cakes" className={styles.link}>
            Cakes
          </a>
          <a href="#gallery" className={styles.link}>
            Gallery
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </div>
        <div className={styles.socialMedia}>
          <a href="#" className={styles.socialLink}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className={styles.socialLink}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className={styles.socialLink}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Cake Havean. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
