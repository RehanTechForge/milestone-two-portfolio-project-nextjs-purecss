import React from "react";
import styles from "./ContactSection.module.css";
import Button from "../Global/Button";
const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <h1>Contact me</h1>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <span className={styles.label}>Name</span>
          <input type="text" className={styles.input} placeholder="Your Name" />
        </div>
        <div className={styles.formGroup}>
          <span className={styles.label}>Email</span>
          <input
            type="email"
            className={styles.input}
            placeholder="email@example.com"
          />
        </div>
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <span className={styles.label}>Nachricht</span>
          <textarea
            className={styles.textarea}
            placeholder="Hello, my name is..."
          ></textarea>
        </div>
      </form>
      <div className={styles.contactSectionBottom}>
        <Button btnText="Send Message" isShow={false} link="#" />
      </div>
    </section>
  );
};

export default ContactSection;
