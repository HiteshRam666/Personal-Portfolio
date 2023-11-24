import React from "react";
import "./intro.css";
import bg from "../../assets/hero.png";
import btnImg from "../../assets/github.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="hello"
        >
          Hello,
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="introText"
        >
          I'm <span className="introName">Hitesh Ram🚀</span>
        </motion.span>
        <p className="introPara">
          Passionate about merging machine learning, deep learning,
          <br /> and web development to craft cutting-edge, intelligent
          solutions.
        </p>
        {/* <Link> */}
        <a
          href="https://github.com/HiteshRam666"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={btnImg} alt="github" className="btnImg" />
            Access Github
          </button>
        </a>
        {/* </Link> */}
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        src={bg}
        alt="profile"
        className="bg"
      />
    </section>
  );
};

export default Intro;
