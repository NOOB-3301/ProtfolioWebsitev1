import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";


export default function FooterComp() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="bg-[#1a1a2e] text-white py-6 text-center"
        >
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
                <motion.p whileHover={{ scale: 1.05 }} className="text-gray-400 text-sm">
                Made with ♡ by Arka Basak
                </motion.p>
                

            </div>
        </motion.footer>
    );
}
