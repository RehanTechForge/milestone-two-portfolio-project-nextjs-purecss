"use client";
import React, { useState } from "react";
import styles from "./main.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Main = ({
  mainHeading,
  supportHeading,
}: {
  mainHeading: string;
  supportHeading: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.main}>
      {/* Background video */}
      <video
        className={styles.videoBg}
        src="/videos/video.mp4"
        loop
        autoPlay
        muted
      ></video>
      <div className={styles.overlayVideo}></div>

      {/* Header content */}
      <header className={styles.headerContent}>
        <div className={styles.headerNav}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image
                className={styles.logoMob}
                src="/images/logo.png"
                alt="This is Our logo"
                height={60}
                width={60}
              />
            </Link>
          </div>
          {/* Hamburger menu icon */}
          <div className={styles.hamBurger} onClick={() => setMenuOpen(true)}>
            <Image
              src={"/images/burger.png"}
              alt="Burger"
              height={25}
              width={25}
            />
          </div>
        </div>

        <div className={styles.headerCont}>
          <h1>{mainHeading}</h1>
          <h2>{supportHeading}</h2>
        </div>
      </header>

      {/* Fullscreen menu */}
      <div
        className={`${styles.fullScreenMenu} ${
          menuOpen ? styles.menuVisible : ""
        }`}
      >
        {/* Cross icon to close menu */}
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <Image
            className={styles.closeImage}
            src="/images/close.png"
            alt="Close"
            width={30}
            height={30}
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.mainMenu}>
            <h1 className={styles.menuLink}>
              <Link href={"/"}>Home</Link>
            </h1>
            <h1 className={styles.menuLink}>
              <Link href={"/projects"}>projects</Link>
            </h1>
            <h1 className={styles.menuLink}>
              <Link href={"/about"}>about</Link>
            </h1>
            <h1 className={styles.menuLink}>
              <Link href={"/contact"}>contact</Link>
            </h1>
          </div>
          <div className={styles.socialMenu}>
            <div>
              <p className={styles.socialLink}>Muhammadrehan125768@gmail.com</p>
              <p className={styles.socialLink}>03184966323</p>
              <ul className={styles.socialIcons}>
                <li>
                  <FaGithub size={24} />
                </li>
                <li>
                  <CiLinkedin size={24} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
