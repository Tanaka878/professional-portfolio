import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Define proper interface instead of using 'any'
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string; // Optional
  liveDemo?: string; // Optional
}

// Reusable Project Card Component with proper typing
const ProjectCard = ({ title, description, tags, image, github, liveDemo }: ProjectCardProps) => (
  <div className="border border-white shadow-lg shadow-white/30 rounded-lg p-6 bg-dark-blue text-white">
    {/* Image */}
    <div className="relative w-full h-40 mb-4">
      <Image
        src={image}
        alt={`${title} Image`}
        className="object-cover rounded-md"
        fill
      />
    </div>
    {/* Project Title */}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {/* Description */}
    <p className="text-sm text-gray-300 mb-3">{description}</p>
    {/* Tags */}
    <div className="text-sm text-purple-300 font-medium mb-4">{tags.join(" ")}</div>
    {/* Action Links */}
    <div className="flex items-center gap-4">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-purple-400 transition"
        >
          <FaGithub size={20} /> <span>GitHub</span>
        </a>
      )}
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-purple-400 transition"
        >
          <FiExternalLink size={20} /> <span>Live Demo</span>
        </a>
      )}
    </div>
  </div>
);

// Projects Component
const Projects = () => {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Community Forum"
          description="A group chat application to connect people with shared interests."
          tags={["#java", "#next.js"]}
          image="/Images/naruto.jpeg"
          github="https://github.com"
          liveDemo="https://example.com"
        />
        <ProjectCard
          title="E-Commerce Platform"
          description="An online store with full e-commerce functionality."
          tags={["#react", "#node.js"]}
          image="/Images/naruto.jpeg"
          github="https://github.com"
          liveDemo="https://example.com"
        />
        <ProjectCard
          title="Weather App"
          description="A simple weather app providing live weather updates."
          tags={["#typescript", "#api"]}
          image="/Images/naruto.jpeg"
          github="https://github.com"
          liveDemo="https://example.com"
        />
      </div>
    </section>
  );
};

export default Projects;
