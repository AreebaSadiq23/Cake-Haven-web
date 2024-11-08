"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">🎂Cake Haven</Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {/* Hamburger icon */}
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ""}`}></div>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link href="#home" className={styles.navLink}>
          Home
        </Link>
        <Link href="#about" className={styles.navLink}>
          About Us
        </Link>
        <Link href="#cakes" className={styles.navLink}>
          Cakes
        </Link>
        <Link href="#gallery" className={styles.navLink}>
          Gallery
        </Link>
        <Link href="#contact" className={styles.navLink}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
