import React from 'react'
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import {styles}from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from "../hoc" 


const ServiceCard =({index,title, icon}) => {
  return(
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed: 450
          }}
          className='bg-tertiary round-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />

          <h3 className='text-white text-[20px] font-bold'
          >
          {title}
          </h3>

        </div>
      </motion.div>
    </Tilt> 
  )
}


const  About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className = {styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a skilled software developer with experience in C++, Python, and Javascript 
        and expertise in frameworks like React, Node.js, and Three.js. I'm a quick study
        and an interest in Artificial Intelligence, Machine Learning, and Computational Math. 
        Let's work together to create efficient, scalable solution to bring ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrayp gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About,"about")