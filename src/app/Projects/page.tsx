'use client'; 
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion"; 

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveDemo?: string;
}

const ProjectCard = ({ title, description, tags, image, github, liveDemo }: ProjectCardProps) => {
  const tagColors: Record<string, string> = {
    "#java": "#fc0320",
    "#next.js": "#036bfc",
    "#mongodb": "#68de59",
    "#react": "#036bfc",
    "#node.js": "#fcf003",
    "#typescript": "#68de59",
    "#UI/UX": "#fc0320",
    "#SPRING-AI": "#fcf003",
    "#HTML": "#036bfc",
    "#CSS": "#fc0320",
  };

  return (
    <motion.div
      className="border border-white shadow-lg shadow-white/30 rounded-lg p-6 bg-dark-blue text-white"
      whileHover={{ scale: 1.05 }} 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
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
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-lg text-sm font-medium"
            style={{ backgroundColor: tagColors[tag] || "#444", color: "#fff" }}
          >
            {tag}
          </span>
        ))}
      </div>
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
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full max-w-6xl mx-auto"
      initial={{ opacity: 0 }} // Initial  state
      animate={{ opacity: 1 }} // Final animation state
      transition={{ duration: 0.8 }} // Animation duration
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 0.6 }} // Animation duration
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2, // Stagger animation for child elements
            },
          },
        }}
      >
        <ProjectCard
          title="Community Forum"
          description="A group chat application to connect people with shared interests."
          tags={["#java", "#next.js", "#mongodb"]}
          image="/Images/phone.png"
          github="https://github.com/Tanaka878/CommunityForumApp"
          liveDemo="https://www.community-forum.co.zw/"
        />
        <ProjectCard
          title="Online Banking Platform"
          description="A web app that simulates the operations of a banking platform"
          tags={["#react", "#node.js", "#JAVA"]}
          image="/Images/bankingDashboard.png"
          github="https://github.com/Tanaka878/Front-End"
          liveDemo="https://front-end-gray-one.vercel.app/"
        />
        <ProjectCard
          title="My Portfolio Website"
          description="A website that showcases my skills and projects I have worked on."
          tags={["#typescript", "#UI/UX"]}
          image="/Images/portfolio.png"
          github="https://github.com/Tanaka878/professional-portfolio"
          liveDemo="https://tanaka-musungare.vercel.app/"
        />
        <ProjectCard
          title="JOINAI SUPPORT SYSTEM"
          description="An online ticketing system enriched with AI for effective customer support. DEMO AVAILABLE ON REQUEST"
          tags={["#typescript", "#SPRING-AI", "#Java", "#UI/UX", "#Next.js"]}
          image="/Images/marketing.jpg"
          github="https://github.com/Tanaka878/joinai-support-dashboard"
          liveDemo="https://joinai-support-dashboard.vercel.app/"
        />
        <ProjectCard
          title="Herbalife"
          description="A project I did for a client to showcase their products and services."
          tags={["#Nextjs", "#tailwind", "#UI/UX"]}
          image="/Images/herbalLife.png"
          github="https://github.com/Tanaka878/HerbalClinic"
          liveDemo="https://save-a-man.vercel.app/"
        />
        <ProjectCard
          title="Design Patterns"
          description="A repository that I use for referrals when I do system design to write clean and more scalable and maintainable code."
          tags={["#java"]}
          image="/Images/phone.png"
          github="https://github.com/Tanaka878/Design-Patterns"
          liveDemo=""
        />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
