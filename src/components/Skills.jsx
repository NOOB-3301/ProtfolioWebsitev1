import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { 
  FaJs, FaPython, FaRust, FaReact, FaNodeJs, FaDocker, FaGit, FaHtml5, FaCss3 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiMongodb, SiFirebase, SiPostgresql, 
  SiArchlinux, SiExpress, SiVercel 
} from "react-icons/si";

const skills = {
  "Programming Languages": [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={30} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={30} /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" size={30} /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={30} /> },
    { name: "CSS", icon: <FaCss3 className="text-blue-500" size={30} /> },
  ],
  Frameworks: [
    { name: "React.js", icon: <FaReact className="text-cyan-400" size={30} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={30} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={30} /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" size={30} /> },
  ],
  Tools: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={30} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" size={30} /> },
    { name: "Git", icon: <FaGit className="text-red-500" size={30} /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" size={30} /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" size={30} /> },
    { name: "Vercel", icon: <SiVercel className="text-white" size={30} /> },
    { name: "Arch Linux", icon: <SiArchlinux className="text-blue-300" size={30} /> },
  ],
};

export default function SkillsMinimal() {
  return (
    <section id="skills" className="py-12 bg-[#1a1a2e] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        {Object.entries(skills).map(([category, items], index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

          return (
            <motion.div
              ref={ref}
              key={category}
              className="mb-8 border border-gray-700 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <h3 className="text-xl font-medium mb-4 text-purple-400">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center space-y-2 p-3 rounded-lg cursor-pointer transition-all duration-300 border border-gray-600 hover:border-purple-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {skill.icon}
                    <p className="text-sm text-gray-300">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
