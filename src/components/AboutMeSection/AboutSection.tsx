import React from "react";
import styles from "./AboutSection.module.css";
import Image from "next/image";
const images = [
  { name: "HTML5", path: "/images/HTML5.png" },
  { name: "CSS3", path: "/images/CSS3.png" },
  { name: "JavaScript", path: "/images/Javascript.png" },
  { name: "React", path: "/images/React.png" },
  { name: "Node.js", path: "/images/Nodejs.png" },
  { name: "Figma", path: "/images/Figma.png" },
  { name: "Chrome", path: "/images/Google Chrome.png" },
  { name: "VS Code", path: "/images/Visual Studio Code.png" },
  { name: "Git", path: "/images/Shape.png" },
  { name: "npm", path: "/images/npm.png" },
];

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionMain}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.
        </p>
        <div className={styles.aboutSectionBottom}>
          <h2>My skills</h2>
          <div className={styles.skillsSection}>
            {images.map((img) => (
              <div key={img.name}>
                <Image src={img.path} alt={img.name} height={15} width={15} />
                <span>{img.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
