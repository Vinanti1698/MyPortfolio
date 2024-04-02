import React from "react";
import DhaivatImage from './assets/Vinanti.jpg';
import LondonBackScreen from './assets/NewYorkBackScreen.jpeg';
import Lottie from 'lottie-react';
import AnimationData from './assets/DownAnimation.json';
import Fade from "react-reveal/Fade";
import { Link } from 'react-scroll';
export default function LandingPage(props) {
  if (props.isLoggedIn) {
    return (
      <>
        <div id="home" className="relative isolate w-screen min-h-screen overflow-hidden bg-customGradient-900 py-24 sm:py-32 flex flex-col md:flex-row items-center justify-center">
          <img src={LondonBackScreen} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-15"></img>
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#013a63] to-[#90e0ef] opacity-20"></div>
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#90e0ef] to-[#013a63] opacity-20"></div>
          </div>
          <img
            src={DhaivatImage}
            alt="The profile person image is presented for the profile is to be kept here"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover object-right md:object-center opacity-95"
          />
          <Fade bottom duration={1200}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 md:ml-16">
              <h2 className="text-4xl font-bold tracking-tight text-customGradient-50 sm:text-6xl hover:text-opacity-50 hover:underline">
                Software Engineer and Full-Stack Developer
              </h2>
              <p className="mt-6 text-lg leading-8 text-customGradient-300">
              Hey, I am Vinanti, currently pursuing an MS in Computer Science from Stony Brook University. With my expertise spanning both front-end and back-end development, along with a strong background in databases, I excel in leveraging a wide array of technologies. Whether it's crafting seamless user experiences with React, HTML, CSS, and Bootstrap on the front-end, or optimizing backend systems with Java, Python, Node.js, and PostgreSQL, I'm all about creating a meaningful impact, one line of code at a time.           
               </p>
            </div>
          </Fade>
  
          <Link to="expertise" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50" smooth={true} duration={800}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
            <Lottie animationData={AnimationData}></Lottie>
          </div>
          </Link> 
       
        </div>
      </>
    );
  }
}
