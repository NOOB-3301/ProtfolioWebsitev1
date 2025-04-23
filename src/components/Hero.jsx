import Lottie from "lottie-react";
import animationData from "../lotties/programmer.json"; // Adjust the path
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="w-full top-0 left-0 bg-[#1a1a2e] shadow-md">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-center px-6 md:px-12 py-20 bg-[#1a1a2e] text-white min-h-screen text-center lg:text-left">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi there!<br />
            I am <span className="text-purple-400">Arka</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-md">
            Learning some Backend stuff or fixing my Hyprland setup :)
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/arka-basak-9ab939336/"
              className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-full 
              hover:bg-purple-500 hover:text-gray-900 transition shadow-lg shadow-purple-500/50"
            >
              Let's ↗ Connect
            </a>
            <a
              href="https://drive.google.com/file/d/1DtVUJ1bXjulHycxXTANYLIiTF17UOlDS/view?usp=sharing"
              className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-full 
              hover:bg-purple-500 hover:text-gray-900 transition shadow-lg shadow-purple-500/50"
            >
              My CV
            </a>
          </div>
        </div>

        {/* Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
          {/* Multi-Colored Glowing Effect */}
          <div className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-blue-500 blur-[120px] opacity-30"></div>
          <div className="absolute w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-purple-500 blur-[100px] opacity-40"></div>

          {/* Lottie Animation with Dual Glow */}
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="relative w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[500px] lg:h-[700px] filter drop-shadow-[0_0_40px_#3b82f6] animate-pulse"
          />
        </div>
      </section>
    </div>
  );
}
