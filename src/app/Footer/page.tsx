import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Tanaka Musungare</h2>
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Tanaka878"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tanaka-musungare-26668a295/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:musungaretanaka@gmail.com"
             target="_blank"
           rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
