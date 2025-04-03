import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
    </div>
  );
};

const Projects = () => {
  const colors = {
    red: "#fc0320",
    yellow: "#fcf003",
    blue: "#036bfc",
    green: "#68de59",
  };

  console.log(colors.green);
  return (
    <section className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          liveDemo="https://www.google.com/"
        />
        <ProjectCard
          title="My First Website"
          description="A website that showcases my skills and projects I have worked on."
          tags={["#HTML", "#CSS", "#UI/UX"]}
          image="/Images/first website.png"
          github="https://github.com/Tanaka878/MyPortfolio"
          liveDemo="https://my-portfolio-smoky-xi-97.vercel.app/"
        />

<ProjectCard
          title="Design Patterns"
          description="A repository that i use for referrals when i do system design to write clean and more scalable and maintanable code"
          tags={["#java"]}
          image="/Images/phone.png"
          github="https://github.com/Tanaka878/Design-Patterns"
          liveDemo=""
        />
      </div>
    </section>
  );
};

export default Projects;
