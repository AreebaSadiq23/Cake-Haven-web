import React from "react";
import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "The Chocolate Delight cake was heavenly! Best I've ever tasted.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bob Smith",
    review:
      "Vanilla Dream cake brought back childhood memories. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Clara Adams",
    review: "Red Velvet is my favorite! It was moist and flavorful.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Brown",
    review: "The Fruit Fiesta was fresh and delicious. Perfect for summer!",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>What Our Customers Say</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <p className={styles.review}>"{testimonial.review}"</p>
            <h3 className={styles.customerName}>- {testimonial.name}</h3>
            <div className={styles.rating}>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <span key={index} className={styles.star}>
                  ⭐
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
