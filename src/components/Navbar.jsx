import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Code, Star, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const navItems = [
  { name: "Skills", icon: <Code size={20} /> },
  { name: "Achievements", icon: <Star size={20} /> },
  { name: "Projects", icon: <Folder size={20} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-[#1a1a2e] z-50 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="sm:ml-6 lg:ml-0 md:ml-3">
          <motion.img 
            src="/arka3.png" 
            alt="logo" 
            className="h-5 scale-350 brightness-125"
            whileHover={{ scale: 1.1, filter: "drop-shadow(0px 0px 10px #6366f1)" }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.name.toLowerCase().replace(/ /g, "-")}`}
              className="flex items-center space-x-2 font-medium hover:text-purple-400 transition duration-300"
              whileHover={{ scale: 1.05, color: "#a855f7" }}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
          <motion.a
            href="https://github.com/NOOB-3301"
            className="flex items-center space-x-2 font-medium hover:text-purple-400 transition duration-300"
            whileHover={{ scale: 1.05, color: "#a855f7" }}
          >
            <FaGithub size={20} />
            <span>Github</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-purple-400 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#12122b] shadow-md shadow-purple-500/30 rounded-b-xl w-full"
        >
          <div className="flex flex-col space-y-4 p-4 text-white">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.name.toLowerCase().replace(/ /g, "-")}`}
                className="flex items-center space-x-2 font-medium hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
