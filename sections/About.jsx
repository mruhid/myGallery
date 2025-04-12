"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Hi, I’m Ruhid Mammadzade a{" "}
        <span className="font-extrabold text-white"> Web Developer</span> — with
        a passion for building{" "}
        <span className="font-extrabold text-white">clean</span>,{" "}
        <span className="font-extrabold text-white">responsive</span>, and{" "}
        <span className="font-extrabold text-white">functional</span> digital
        experiences. With a background in Computer Engineering and over{" "}
        <span className="font-extrabold text-white">3 years</span> of hands-on
        development experience, I specialize in both frontend and backend
        technologies. I work with tools like{" "}
        <span className="font-extrabold text-white"> Next.js</span>,
        <span className="font-extrabold text-white">React</span> , Node.js,
        MySQL, and  <span className="font-extrabold text-white">Tailwind CSS</span>, and I’m always excited to learn and explore new
        technologies. I’ve built everything from portfolio websites to admin
        panels and full-scale business platforms, and I take pride in writing
        code that’s not only efficient but maintainable and scalable. Whether
        it’s creating a seamless user interface or architecting a backend
        system, my goal is to turn ideas into working solutions that make an
        impact.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
