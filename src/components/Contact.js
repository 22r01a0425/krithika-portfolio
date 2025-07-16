// src/components/Contact.js
"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-neutral-950 text-white py-24 px-6 sm:px-10 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-10 text-lg">
          I'm currently open to opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="gattukrithika5@gmail.com"
              className="text-indigo-300 hover:text-white transition duration-200 ease-in"
            >
              22r01a0425@cmrit.ac.in
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/krithika-gattu-12959727a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-white transition duration-200 ease-in"
            >
              krithika-gattu
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/22r01a0425"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-white transition duration-200 ease-in"
            >
              22r01a0425
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
