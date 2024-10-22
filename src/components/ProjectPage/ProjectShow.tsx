import React from "react";
// import styles from "./ProjectShow.module.css";
import styles from "@/components/PortfolioShowCaseSection/PortfolioShowCase.module.css";
import Card from "../Global/Card";
const ProjectShow = () => {
  return (
    <section>
      <div className={styles.projectSection} style={{ padding: "40px 100px" }}>
        <h1 style={{ fontSize: "34px", fontWeight: "bold", marginTop: "40px" }}>
          My projects
        </h1>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <Card project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
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
  {
    id: 2,
    title: "FitTrack",
    description:
      "A comprehensive fitness tracking app with personalized workout plans.",
    category: "Mobile App",
    image: "/images/app.jpg",
    link: "#",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
  },
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
export default ProjectShow;
