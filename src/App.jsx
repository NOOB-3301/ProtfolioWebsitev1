import { useState } from 'react'
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './App.css'
import Navbar from './components/Navbar'
import { div } from 'framer-motion/client';
import HeroSection from './components/Hero';
import SkillsSection from './components/Skills';
import AchievementsSection from './components/AchievementSection';
import ProjectsSection from './components/ProjectSection';
import FooterComp from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-950 min-h-screen">
        <AnimatePresence>
          {isLoading ? (
            <div className="h-screen flex items-center justify-center text-white">
        <div className="sm:ml-6 lg:ml-0 md:ml-3">
          <motion.img 
            src="/arka3.png" 
            alt="logo" 
            className="h-20 scale-350 brightness-125"
            whileHover={{ scale: 1.1, filter: "drop-shadow(0px 0px 10px #6366f1)" }}
          />
        </div>            </div>
          ) : (
            <motion.section
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="h-full overflow-auto"
            >
              <Navbar />
              <HeroSection />
              <SkillsSection />
              <AchievementsSection/>
              <ProjectsSection/>
              <FooterComp/>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}


export default App
