'use client';
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  src: string;
  alt: string;
  name: string;
  category: string;
}

const Skills = () => {
  const [filter, setFilter] = useState<string>("all");

  const skills: Skill[] = [
    { src: "/Images/mongo.png", alt: "MongoDB", name: "MongoDB", category: "database" },
    { src: "/Images/java.png", alt: "Java", name: "Java", category: "language" },
    { src: "/Images/docker.png", alt: "Docker", name: "Docker", category: "devops" },
    { src: "/Images/mysql.png", alt: "MySQL", name: "MySQL", category: "database" },
    { src: "/Images/next.js.png", alt: "Next.js", name: "Next.js", category: "framework" },
    { src: "/Images/kubernetes.png", alt: "Kubernetes", name: "Kubernetes", category: "devops" },
    { src: "/Images/react.png", alt: "React", name: "React", category: "framework" },
    { src: "/Images/jenkins.png", alt: "Jenkins", name: "Jenkins", category: "devops" },
  ];

  const categories = [
    { id: "all", name: "All Skills", icon: "🎯" },
    { id: "language", name: "Languages", icon: "💻" },
    { id: "framework", name: "Frameworks", icon: "⚛️" },
    { id: "database", name: "Databases", icon: "🗄️" },
    { id: "devops", name: "DevOps", icon: "🚀" },
  ];

  const filteredSkills = filter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 hover:-translate-y-2">
                {/* Skill Image */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    fill
                    className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                    sizes="80px"
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>



                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {skills.length}
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {new Set(skills.map(s => s.category)).size}
              </div>
              <div className="text-gray-400 text-sm">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                5+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;