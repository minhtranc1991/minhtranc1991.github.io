import React from "react";
import './Tech.css';
import { motion } from "framer-motion";

import { FaLaptopCode } from "react-icons/fa";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const levelClassNames = {
  Core: "tech-card--expert",
  Data: "tech-card--advanced",
  Tools: "tech-card--intermediate",
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='tech-heading'>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies & Tools. <FaLaptopCode className="tech-heading-icon" /></h2>
      </motion.div>

      <div className='tech-intro'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='tech-description'
        >
          The languages, data tools and infrastructure I use to research, test and run trading systems.
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="tech-legend"
        >
          <div className="tech-legend-item">
            <span className="tech-legend-dot tech-legend-dot--expert"></span> Core
          </div>
          <div className="tech-legend-item">
            <span className="tech-legend-dot tech-legend-dot--advanced"></span> Data
          </div>
          <div className="tech-legend-item">
            <span className="tech-legend-dot tech-legend-dot--intermediate"></span> Tools
          </div>
        </motion.div>
      </div>

      <div className='tech-grid'>
        {technologies.map((technology, index) => (
          <motion.div
            className={`tech-card ${levelClassNames[technology.level] || ""}`}
            key={technology.name}
            variants={fadeIn("up", "spring", 0.08 * index, 0.75)}
          >
            <div className='tech-icon-wrap'>
              <technology.icon className='tech-icon' aria-hidden='true' />
            </div>
            <h3 className='tech-name'>{technology.name}</h3>
            <span className='tech-level'>{technology.level}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
