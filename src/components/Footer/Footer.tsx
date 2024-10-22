import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerFirstSection}>
        <ul>
          <li>
            <Link href={"/projects"}>projects</Link>
          </li>
          <li>
            <Link href={"/about"}>about</Link>
          </li>
          <li>
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerMidSection}>
        <div className={styles.mobRespShow}>
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="Footer logo"
              height={80}
              width={80}
            />
          </Link>
        </div>
        <span>
          <p>
            <Link href="mailto:muhammadrehan125768@gmail.com">
              muhammadrehan125768@gmail.com
            </Link>
          </p>
          <p>
            <Link href="tel:+923184966323">03184966323</Link>
          </p>
        </span>
      </div>
      <div className={styles.mobResp}>
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="Footer logo"
            height={80}
            width={80}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
