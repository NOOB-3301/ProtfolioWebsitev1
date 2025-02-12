import React from "react";

const GradientBackground= () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#1e1e2e] via-[#3a2a49] to-[#0f0f1a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(128,0,128,0.4)_0%,_rgba(0,0,0,0)_70%)] opacity-60" />
    </div>
  );
};

export default GradientBackground;
