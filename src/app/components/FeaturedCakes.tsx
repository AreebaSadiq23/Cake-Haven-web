"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import styles from "./FeaturedCakes.module.css";

const cakes = [
  {
    id: 1,
    name: "Chocolate Delight",
    description: "Rich chocolate layers with ganache",
    image: "/images/chocolate-cake.jpg",
    link: "/cakes/chocolate-delight",
  },
  {
    id: 2,
    name: "Vanilla Dream",
    description: "Classic vanilla cake with buttercream",
    image: "/images/vanilla-cake.jpg",
    link: "/cakes/vanilla-dream",
  },
  {
    id: 3,
    name: "Red Velvet",
    description: "Red velvet cake with cream cheese frosting",
    image: "/images/red-velvet-cake.jpg",
    link: "/cakes/red-velvet",
  },
  {
    id: 4,
    name: "Fruit Fiesta",
    description: "Fresh fruit layers with whipped cream",
    image: "/images/fruit-cake.jpg",
    link: "/cakes/fruit-fiesta",
  },
];

const FeaturedCakes: React.FC = () => {
  return (
    <section className={styles.featuredCakes}>
      <h2 className={styles.heading}>Popular Cakes</h2>
      <div className={styles.cakesGrid}>
        {cakes.map((cake) => (
          <div key={cake.id} className={styles.cakeCard}>
            <Image
              src={cake.image}
              alt={cake.name}
              className={styles.cakeImage}
              width={500} 
              height={300} 
            />
            <div className={styles.cakeInfo}>
              <h3 className={styles.cakeName}>{cake.name}</h3>
              <p className={styles.cakeDescription}>{cake.description}</p>
              <Link href={cake.link} prefetch={true}>
                <button className={styles.viewButton}>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCakes;
