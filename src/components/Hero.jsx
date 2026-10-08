import { motion } from "framer-motion";
import './Hero.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-copy-wrap'>
        <div className='hero-accent' aria-hidden='true'>
          <div className='hero-accent-dot' />
          <div className='hero-accent-line' />
        </div>

        <div className='hero-copy'>
          <h1 className='hero-title'>
            Hi, I'm{" "}
            <motion.span
              variants={textVariant(0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.25 }}
              className='hero-name'
            >
              Minh
            </motion.span>
          </h1>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='hero-subtitle'
          >
            I build crypto market-making <br className='hero-line-break' />
            systems and systematic trading strategies
          </motion.p>

          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='hero-socials'
          >
            <a href="https://github.com/minhtranc1991" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label='GitHub'>
              <FaGithub />
            </a>
            <a href="mailto:minh.tranc.1991@gmail.com" className="hero-social-link" aria-label='Email'>
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='hero-scroll-indicator'>
        <a href='#about'>
          <div className='hero-scroll-shell'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='hero-scroll-dot'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
