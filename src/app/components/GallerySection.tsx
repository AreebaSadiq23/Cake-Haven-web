"use client";
import React from "react";
import styles from "../styles/GallerySection.module.css";

const images = [
  "/img9.jpeg",
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "./img8.jpg",
  "/img7.jpg",

];

const GallerySection: React.FC = () => {
  return (
    <section className={styles.gallerySection} id="gallery">
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.galleryContainer}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              src={src}
              alt={`Cake ${index + 1}`}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default GallerySection;
