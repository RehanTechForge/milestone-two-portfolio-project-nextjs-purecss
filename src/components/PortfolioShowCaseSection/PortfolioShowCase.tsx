import React from "react";
import styles from "./PortfolioShowCase.module.css";
import Card from "../Global/Card";
import Button from "../Global/Button";

const PortfolioShowCase = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <section className={styles.showcaseSection}>
          <h2>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <Card project={project} index={index} key={index} />
            ))}
          </div>
          <div className={styles.showCaseBottom}>
            <Button btnText="all projects" isShow={true} link="/projects" />
            <Button btnText="contact me" isShow={true} link="/contact" />
          </div>
        </section>
      </div>
    </div>
  );
};
const projects = [
  {
    id: 1,
    title: "Task Manager Pro",
    description:
      "A powerful task management application with real-time collaboration features.",
    category: "Web App",
    image: "/images/task.jpg",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  // {
  //   id: 2,
  //   title: "FitTrack",
  //   description:
  //     "A comprehensive fitness tracking app with personalized workout plans.",
  //   category: "Mobile App",
  //   image: "/images/app.jpg",
  //   link: "#",
  //   technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
  // },
  {
    id: 3,
    title: "GreenMart",
    description: "An eco-friendly online marketplace for sustainable products.",
    category: "E-commerce",
    image: "/images/web.jpg",
    link: "#",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Stripe"],
  },
  {
    id: 4,
    title: "SmartScribe",
    description:
      "An AI-powered transcription and summarization tool for various media.",
    category: "AI Tool",
    image: "/images/ai.jpg",
    link: "#",
    technologies: ["Python", "TensorFlow", "Flask", "WebRTC"],
  },
];
export default PortfolioShowCase;
