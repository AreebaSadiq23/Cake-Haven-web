"use client";
import React, { useState } from "react";
import styles from "../styles/ContactSection.module.css";

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.description}>
          At Cake Haven, we are passionate about creating delicious cakes for
          every occasion. Whether you have a question about our flavors, need
          assistance with an order, or want to share your feedback, we&apos;re here
          to help!
        </p>
        <p className={styles.description}>
          Our customer service team is dedicated to ensuring you have the best
          experience possible. Don&apos;t hesitate to reach out; we value your
          inquiries and aim to respond as quickly as possible.
        </p>
        <p className={styles.callToAction}>
          Fill out the form on the right, and let us know how we can assist you
          today!
        </p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className={styles.textarea}
            rows={5}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUsSection;
