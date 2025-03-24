import React from 'react';
import { HiMenu } from 'react-icons/hi';

const NavBar = () => {
  return (
    <div className="flex items-center w-full relative">
      <div className="font-extrabold tracking-wider text-2xl absolute left-2">
        Tanaka
      </div>

      <div className="absolute right-2 sm:hidden">
        <HiMenu className="text-2xl cursor-pointer" />
      </div>

      <div className="flex gap-3 mx-auto hidden sm:block  md:flex">
        <div className="hover:text-[#9333EA] hover:border-b-2 hover:border-white transition">Services</div>
        <div className="hover:text-[#9333EA] hover:border-b-2 hover:border-white transition">Skills</div>
        <div className="hover:text-[#9333EA] hover:border-b-2 hover:border-white transition">Projects</div>
        <div className="hover:text-[#9333EA] hover:border-b-2 hover:border-white transition">Testimonials</div>
        <div className="hover:text-[#9333EA] hover:border-b-2 hover:border-white transition">Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
