import React from "react";
import "./works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        Welcome to my machine learning portfolio! I'm Hitesh Ram, showcasing a
        collection of innovative projects in predictive analytics, deep learning
        marvels, and artificial neural networks. Dive into a world where data
        meets creativity, highlighting my expertise in pushing the boundaries of
        machine learning.
      </span>
      <div className="worksImgs">
        <a
          href="https://github.com/HiteshRam666/Lip-Reading-web-app-using-ML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={portfolio1}
            alt=""
            className="worksImg"
            initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </a>
        <a
          href="https://github.com/HiteshRam666/End-to-End-Potato-Leave-Disease-Detection/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={portfolio2}
            alt=""
            className="worksImg"
            initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </a>
        <a
          href="https://github.com/HiteshRam666/End-to-End-Malaria-Cell-Detection-using-CNN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={portfolio3}
            alt=""
            className="worksImg"
            initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </a>
        <a
          href="https://github.com/HiteshRam666/Food-Prediction-WebApp-using-Tensorflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={portfolio4}
            alt=""
            className="worksImg"
            initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </a>
        <a
          href="https://github.com/HiteshRam666/MovieX-Fully-Responsive-website-using-React-Js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={portfolio5}
            alt=""
            className="worksImg"
            initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </a>
        <a
          href="https://github.com/HiteshRam666/Pothole-Detection-using-Yolov8-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={portfolio6}
            alt=""
            className="worksImg"
            initial={{ opacity: 0, scale: 0.5, y: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
        </a>
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
