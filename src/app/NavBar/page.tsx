import React from 'react';

const NavBar = () => {
  return (
    <div className="flex items-center w-full relative">
      {/* Tanaka near the start of the screen */}
      <div className=" font-extrabold tracking-wider text-2xl absolute left-2">
        Tanaka
      </div>

      {/* Other items centered on the screen */}
      <div className="flex gap-3 mx-auto">
        <div>Services</div>
        <div>Skills</div>
        <div>Works</div>
        <div>Testimonials</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
