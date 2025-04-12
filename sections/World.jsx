'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>The most used tools in countries around the world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="vue.png" alt="people" className="w-full h-full rounded-full object-cover" />
        </div>

        <div className="absolute top-28 left-36 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/angular.png" alt="angular-js" className="w-full rounded-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/react.png" alt="react-js" className="w-full rounded-full h-full" />
        </div>

        <div className="absolute top-[15%] left-[65%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="lynx.png" alt="lynx-js" className="w- rounded-full h-full" />
        </div>
        <div className="absolute top-[24%] left-[56%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="next.svg" alt="next-js" className="w-full h-full" />
        </div>
        <div className="absolute top-[14%] left-[52%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="Me.png" alt="Me" className="w-full rounded-full object-cover bg-white h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
