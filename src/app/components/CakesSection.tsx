"use client";
import React from "react";
import styles from "../styles/CakesSection.module.css";

interface Cake {
  id: number;
  name: string;
  description: string;
  image: string;
}

const cakes: Cake[] = [
  {
    id: 1,
    name: "Chocolate Heaven",
    description: "A rich and creamy chocolate delight.",
    image: "/1.jpeg",
  },
  {
    id: 2,
    name: "Vanilla Dream",
    description: "Light and fluffy vanilla sponge cake.",
    image: "/2.jpeg",
  },
  {
    id: 3,
    name: "Red Velvet",
    description: "A classic red velvet with cream cheese frosting.",
    image: "/3.jpeg",
  },
  {
    id: 4,
    name: "Fruit Fiesta",
    description: "Fresh fruit toppings on a soft sponge cake.",
    image: "/4.jpeg",
  },
];

const CakesSection: React.FC = () => {
  return (
    <section className={styles.cakesSection} id="cakes">
      <h2 className={styles.title}>Our Cakes</h2>
      <div className={styles.cakeList}>
        {cakes.map((cake) => (
          <div key={cake.id} className={styles.cakeCard}>
            <img
              src={cake.image}
              alt={cake.name}
              className={styles.cakeImage}
            />
            <h3 className={styles.cakeName}>{cake.name}</h3>
            <p className={styles.cakeDescription}>{cake.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CakesSection;
