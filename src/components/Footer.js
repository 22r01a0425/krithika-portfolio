// src/components/Footer.js
"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Krithika Gattu. All rights reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/22r01a0425"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/krithika-gattu-12959727a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
