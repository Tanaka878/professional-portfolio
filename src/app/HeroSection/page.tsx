// components/Hero.jsx

import Image from 'next/image';
import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-12">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <p className="text-lg mb-2"> Tanaka Musungare</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-[#9333EA]">An passionate</span><br/>
          <span className="text-[#9333EA]">Software Developer</span>
        </h1>
        <p className="text-gray-400 mb-10 max-w-lg">
          I implement solutions from scratch that helps bridge
          the gap between business and technology to create real business value
        </p>
        
        {/* Action buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 bg-[#9333EA] hover:bg-purple-700 transition text-white px-6 py-3 rounded-full">
            <span>Resume</span>
            <HiDownload/>
          
          </button>
          
          {/* Social icons */}
          <div className="flex space-x-3">
            <a href="https://github.com/Tanaka878" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9333EA]   hover:text-white transition">
              <span>
                <FaGithub/>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/tanaka-musungare-26668a295/" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9333EA]   hover:text-white transition">
              <span>
                <FaLinkedin/>
              </span>
            </a>
            <a href="" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9333EA]  hover:text-white transition">
              <span>
                <FaWhatsapp/>
              </span>
            </a>
          
          </div>
        </div>
      </div>
      
      {/* Profile image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 glow rounded-3xl"></div>
          <div className="bg-gradient-to-br from-purple-900/40 to-black p-1 rounded-3xl">
            <div className="bg-gradient-to-br from-purple-900/20 to-black/80 rounded-3xl overflow-hidden h-80 w-64 md:h-96 md:w-80">
              <div className="relative w-full h-full">
                <Image 
                  src="/Images/naruto.jpeg"
                  alt="Profile Picture" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;