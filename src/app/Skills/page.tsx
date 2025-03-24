import React from "react";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { src: "/Images/mongo.png", alt: "MongoDB" },
    { src: "/Images/java.png", alt: "Java" },
    { src: "/Images/javascript.png", alt: "JavaScript" },
    { src: "/Images/mysql.png", alt: "MySQL" },
    { src: "/Images/next.js.png", alt: "Next.js" },
    { src: "/Images/node.js", alt: "Node.js" },
    { src: "/Images/react.png", alt: "React" },
    { src: "/Images/typescript.png", alt: "TypeScript" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-dark-blue rounded-lg shadow-[0_4px_15px_rgba(128,0,255,0.8)] transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              height={90}
              width={90}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
