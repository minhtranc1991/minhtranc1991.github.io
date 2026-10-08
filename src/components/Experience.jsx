import React from "react";
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaStar, FaCogs } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const isCurrent = experience.date.toLowerCase().includes('present');
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isCurrent ? "rgba(185, 151, 78, 0.15)" : "rgba(17, 34, 28, 0.8)",
        color: "#fff",
        boxShadow: isCurrent
          ? "0 0 30px rgba(185, 151, 78, 0.5), 0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        borderRadius: "16px",
        backdropFilter: "blur(8px)",
        border: isCurrent ? "2px solid rgba(185, 151, 78, 0.4)" : "1px solid rgba(255, 255, 255, 0.05)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgba(17, 34, 28, 0.8)" }}
      date={
        <span className="flex items-center gap-2 font-medium text-secondary opacity-80 font-['Space_Mono'] text-[14px] tracking-wider">
          <FaCalendarAlt /> {experience.date}
          {isCurrent && (
            <span className="ml-2 px-2 py-0.5 bg-[#B9974E] text-white text-[10px] font-bold rounded-full uppercase animate-pulse">
              Current
            </span>
          )}
        </span>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <experience.icon className='w-[55%] h-[55%] text-white' aria-hidden='true' />
        </div>
      }
    >
      <div className="flex flex-col gap-1">
        <h3 className='text-white text-[24px] font-bold font-["Oswald"] tracking-wide uppercase'>
          {experience.title}
        </h3>
        <div className="flex justify-between items-center w-full mt-1">
          <p
            className='text-[#B9974E] text-[16px] font-medium font-["Oswald"] tracking-wider'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.skills?.map((skill, index) => (
          <span
            key={skill}
            className="flex items-center gap-1 bg-[#B9974E1a] text-[#B9974E] text-[11px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-[#B9974E33] font-['Space_Mono']"
          >
            <FaStar className="text-[9px]" /> {skill}
          </span>
        ))}
      </div>

      <ul className='mt-5 list-none space-y-3' role="list">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] flex gap-3 leading-relaxed font-["Inter"] font-normal tracking-wide'
            role="listitem"
          >
            <span className="mt-1.5 flex-shrink-0 text-[#B9974E]">
              <FaCogs className="text-[12px]" />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()} id="experience-heading">
        <p className={`${styles.sectionSubText} text-center font-["Space_Mono"] text-secondary uppercase tracking-widest text-[14px]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center flex justify-center items-center gap-3 font-["Oswald"] font-bold uppercase tracking-wider`}>
          <FaBriefcase className='text-[#B9974E]' aria-hidden="true" /> Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col' aria-labelledby="experience-heading">
        <VerticalTimeline className="before:bg-gradient-to-b before:from-[#B9974E] before:to-transparent">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
