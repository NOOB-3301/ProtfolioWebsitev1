import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";

const achievements = [
    {
        title: "Project Admin in JWOC25",
        desc: "Got selected as project admin for JWOC25",
        date: "Feb 2025",
        position: "right",
        icon: <Star size={24} className="text-blue-400" />,
    },
    {
        title: "Open Source Contributor (SWOC25 & IWOC25)",
        desc: "Contributed to multiple open-source projects.",
        date: "Jan 2024",
        position: "left",
        icon: <Medal size={24} className="text-purple-400" />,
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-20 bg-[#1a1a2e] text-white">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="text-4xl font-bold text-center "
                >
                    Achievements
                </motion.h2>

                <div className="relative mt-12 flex flex-col items-center">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full hidden md:block"></div>

                    <div className="w-full flex flex-col space-y-10 md:space-y-0">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className={`relative w-full flex ${achievement.position === "right" ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Connector Line Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                </div>

                                {/* Achievement Card Wrapper */}
                                <div
                                    className={`w-full md:w-1/2 flex ${achievement.position === "left" ? "justify-start pr-8" : "justify-end pl-8"
                                        }`}
                                >
                                    <AchievementCard achievement={achievement} />
                                </div>
                            </motion.div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function AchievementCard({ achievement }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="bg-[#1a1a2e] p-4 rounded-lg shadow-lg w-full cursor-pointer relative flex items-center space-x-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="p-2 bg-yellow-900/50 rounded-full">{achievement.icon}</div>
            <div>
                <h3 className="text-xl font-semibold text-yellow-400">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.date}</p>

                {/* Hover Description */}
                <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm mt-2"
                >
                    {achievement.desc}
                </motion.p>
            </div>
        </div>
    );
}
