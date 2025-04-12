'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
          My Portfolio
        </h4>
        <Link href='https://mruhid.github.io/Ruhid_Portfolio/'>
          <button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]'
          >
            <img
              src='/headset.svg'
              alt='headset'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>
              Enter portfolio
            </span>
          </button>
        </Link>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />

        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-white'>
            Ruhid Mammadzade
          </h4>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © {new Date().getFullYear()} My Gallery. All rights
            reserved.
          </p>

          <div className='flex gap-4 items-center'>
            {socials.map((social) => (
              <Link key={social.name} href={social.url}>
                <img
                  src={social.src}
                  alt={social.name}
                  className={`${
                    social.name === 'Phone' || social.name === 'Email'
                      ? 'w-12 h-12'
                      : 'h-8 w-8'
                  } object-contain cursor-pointer`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
