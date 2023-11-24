import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do ?</span>
      <span className="skillDesc">
        Skilled in machine learning, deep learning, and neural networks, I fuse
        data science expertise with a flair for web development. Transforming
        complex algorithms into user-friendly applications, I thrive at the
        intersection of innovation and practical solutions.
      </span>
      <div className="skillBars">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)", boxShadow: "0px 0px 0px black" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", boxShadow: "4px 6px 6px black" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="skillBar"
        >
          <img src={UIDesign} alt="UI" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Machine Learning</h2>
            <p>
              Machine learning is a field of artificial intelligence that
              empowers computers to learn patterns and make decisions from data
              without explicit programming.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="skillBar"
          initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)", boxShadow: "0px 0px 0px black"}}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", boxShadow: "4px 6px 6px black" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img src={AppDesign} alt="App" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Deep Learning & Computer Vision</h2>
            <p>
              Deep learning is a subset of machine learning that involves
              training artificial neural networks to recognize patterns and make
              intelligent decisions, mimicking human learning processes.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="skillBar"
          initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)", boxShadow: "0px 0px 0px black" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", boxShadow: "4px 4px 6px black" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <img src={WebDesign} alt="Web" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web development</h2>
            <p>
              Web development encompasses the creation and maintenance of
              websites and web applications, involving the design, coding, and
              implementation of interactive and visually appealing digital
              experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
