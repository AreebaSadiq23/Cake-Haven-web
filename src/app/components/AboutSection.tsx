"use client";
import React from "react";
import Image from "next/image";  
import styles from "../styles/AboutSection.module.css";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Cake Haven</h2>
        <p className={styles.description}>
          At Cake Haven, we bake with love and a passion for perfection. Each of
          our cakes is crafted with the finest ingredients to bring joy to your
          celebrations. From birthdays to weddings, we offer cakes for every
          special occasion, tailored to your tastes.
        </p>
        <p className={styles.description}>
          Our mission is to create unforgettable flavors that leave a lasting
          impression. Experience the magic of cakes made fresh every day!
        </p>
        <p className={styles.description}>
          At Sweet Delights, we believe that every celebration deserves a
          delicious cake! Our cakes are crafted with the finest ingredients, and
          we specialize in custom designs that make your events memorable.
          Whether it is a birthday, wedding, or any other occasion, we have the
          perfect cake for you!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.jpg"
          alt="About Cake Haven"
          className={styles.image}
          width={500}   
          height={400} 
        />
      </div>
    </section>
  );
};

export default AboutSection;
