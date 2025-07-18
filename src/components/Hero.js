'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-blue-100 text-blue-900 flex items-center justify-center px-6 sm:px-12"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Hello, I&apos;m Krithika Gattu{' '}
          <span className="inline-block animate-wiggle">👋</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl font-medium text-gray-700 mb-6"
        >
          Aspiring Data Scientist | AI-ML Enthusiast
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="/Krithika_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold shadow-md transition transform hover:scale-105"
          >
            Contact Info
          </a>
        </motion.div>

        {/* Optional icons */}
        <div className="mt-6 flex justify-center gap-6 text-indigo-600 text-2xl">
          <a href="https://linkedin.com/in/krithika" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/krithika" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Wiggle animation style */}
      <style jsx>{`
        .animate-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
        }
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }
      `}</style>
    </section>
  );
}
