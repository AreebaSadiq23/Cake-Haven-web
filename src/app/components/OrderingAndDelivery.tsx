"use client";
import React, { useState } from "react";
import styles from "../styles/OrderingAndDelivery.module.css";
import {
  FaClipboardList,
  FaTruck,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";

const OrderingAndDelivery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.orderingDelivery}>
      <h2 className={styles.heading}>Ordering & Delivery Information</h2>
      <div className={styles.content}>
        <h3 className={styles.subheading}>How to Order</h3>
        <ol className={styles.orderSteps}>
          <li>
            <FaClipboardList /> Select your desired cake from our menu.
          </li>
          <li>
            <FaClipboardList /> Click on the &quot;Order Now&quot; button.
          </li>
          <li>
            <FaClipboardList /> Fill out the order form with your details.
          </li>
          <li>
            <FaClock /> Choose your preferred delivery date and time.
          </li>
          <li>
            <FaTruck /> Make the payment through our secure checkout.
          </li>
        </ol>

        <h3 className={styles.subheading}>Delivery Options</h3>
        <p className={styles.deliveryDetails}>
          We offer the following delivery options:
        </p>
        <ul className={styles.deliveryList}>
          <li>
            <FaTruck /> Standard Delivery: 3-5 business days
          </li>
          <li>
            <FaTruck /> Express Delivery: 1-2 business days
          </li>
          <li>
            <FaTruck /> Same-Day Delivery (available for select cakes)
          </li>
        </ul>

        <h3 className={styles.subheading}>Important Notes</h3>
        <p className={styles.notes}>
          <FaExclamationCircle /> Please place your order at least 48 hours in
          advance for custom cakes.
          <br />
          <FaExclamationCircle /> Delivery charges may apply based on your
          location.
          <br />
          <FaExclamationCircle /> Make sure to provide accurate delivery details
          to avoid delays.
        </p>

        <button className={styles.orderButton} onClick={openModal}>
          Order Your Cake Now
        </button>

        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3>Order Form</h3>
              <form className={styles.orderForm}>
                <label>
                  Cake Selection:
                  <input type="text" placeholder="Enter cake name" />
                </label>
                <label>
                  Your Name:
                  <input type="text" placeholder="Enter your name" />
                </label>
                <label>
                  Delivery Date:
                  <input type="date" />
                </label>
                <label>
                  Delivery Address:
                  <input type="text" placeholder="Enter your address" />
                </label>
                <button type="submit" className={styles.submitButton}>
                  Submit Order
                </button>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={closeModal}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderingAndDelivery;
