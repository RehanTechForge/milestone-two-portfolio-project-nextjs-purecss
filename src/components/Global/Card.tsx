import React from "react";
import styles from "@/components/PortfolioShowCaseSection/PortfolioShowCase.module.css";
interface CardItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  technologies: string[];
}

const Card = ({ project, index }: { project: CardItem; index: number }) => {
  return (
    <div
      key={project.id}
      className={styles.projectCard}
      style={{ animationDelay: `${(index + 1) * 0.2}s` }}
    >
      <div className={styles.projectImageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
        <div className={styles.projectOverlay}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span className={styles.projectCategory}>{project.category}</span>
      </div>
      <div className={styles.projectInfo}>
        <a href={project.link} className={styles.projectLink}>
          Explore Project
        </a>
        <div className={styles.projectTech}>
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
