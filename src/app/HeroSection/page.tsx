// components/Hero.jsx

import Image from 'next/image';
import React from 'react';

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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          {/* Social icons */}
          <div className="flex space-x-3">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white transition">
              <span>1</span>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white transition">
              <span>2</span>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white transition">
              <span>3</span>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white transition">
              <span>4</span>
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