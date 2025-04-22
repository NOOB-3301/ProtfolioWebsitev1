import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GradientBackground from "./COMP/GradBack";

const projects = [
    {
        name: "PeerLink - P2P file sharing and Video Chat,
        imageLink: "https://github.com/NOOB-3301/Project_Share_V2/blob/master/public/image/Screenshot%202025-04-22%20191245.png",
        githubRepo: "https://github.com/NOOB-3301/Project_Share_V2",
        liveLink: "https://project-share-v2.vercel.app/",
    },
    {
        name: "Anime Streaming App",
        imageLink: "https://raw.githubusercontent.com/NOOB-3301/Anime_website/refs/heads/main/anime.png",
        githubRepo: "https://github.com/NOOB-3301/Anime_website",
        liveLink: "https://anime-app-front-end.vercel.app/",
    },
    {
        name: "CLI Music Player",
        imageLink: "https://raw.githubusercontent.com/NOOB-3301/React-Music-CLI/refs/heads/main/image.png",
        githubRepo: "https://github.com/NOOB-3301/React-Music-CLI",
    },
    {
        name: "Linux Control Centre",
        imageLink: "https://raw.githubusercontent.com/NOOB-3301/Linux_CLI_Control_centre/refs/heads/main/selected_region_20250212_171241.png",
        githubRepo: "https://github.com/NOOB-3301/Linux_CLI_Control_centre",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function ProjectsSection() {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const displayedProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    return (
        <motion.section
            id="projects"
            className="py-20 bg-[#1a1a2e] text-white"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
        >
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    className="text-4xl font-bold "
                >
                    Projects
                </motion.h2>

                {/* Project Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            className="bg-[#1a102b] rounded-lg shadow-lg p-4"
                        >
                            <motion.img
                                src={project.imageLink}
                                alt={project.name}
                                className="w-full h-48 object-cover object-top rounded-md"
                                whileHover={{ scale: 1.02 }}
                            />

                            <h3 className="text-xl font-semibold text-purple-400 mt-4">
                                {project.name}
                            </h3>

                            <div className="flex space-x-4 mt-4 justify-center">
                                {project.githubRepo && (
                                    <a
                                        href={project.githubRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-purple-300 transition"
                                    >
                                        <FiGithub size={24} />
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-purple-300 transition"
                                    >
                                        <FiExternalLink size={24} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-8 flex justify-between space-x-4">
                    <div>
                        
                    </div>
                    <div className="flex gap-3">
                        <div>
                        </div>

                        <div className="flex flex-row gap-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                            className={`px-4 py-2 rounded-md transition flex items-center space-x-2 ${currentPage === 0 ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"}`}
                            disabled={currentPage === 0}
                        >
                            <FiChevronLeft size={20} />
                        </button>

                        <div className="flex space-x-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${currentPage === index ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                            className={`px-4 py-2 rounded-md transition flex items-center space-x-2 ${currentPage === totalPages - 1 ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"}`}
                            disabled={currentPage === totalPages - 1}
                        >
                            <FiChevronRight size={20} />
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    );
}
