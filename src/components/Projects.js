"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Career Coach",
    image: "/assets/career-coach.png",
    description:
      "An AI-powered web app that reads your resume, identifies your ideal job role, and recommends personalized learning paths using OpenAI and Streamlit.",
    github: "https://github.com/22r01a0425/Smart_Career_Coach",
    demo: "#",
  },
  {
    title: "Placement & Internship Tracker (Salesforce)",
    image: "/assets/salesforce-tracker.png",
    description:
      "A custom-built Salesforce app to track internship applications, student offers, and company engagements — complete with reports and dashboards.",
    github: "#",
    demo: "https://www.linkedin.com/posts/krithika-gattu-12959727a_pwclaunchpad-salesforceproject-lightningappbuilder-activity-7346214766509465601-N_d6/",
  },
];



export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white dark:bg-neutral-900 text-black dark:text-white py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-600 text-center mb-12">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
  {projects.map((project, index) => (
    <div key={index} className="group perspective">
      <div className="relative w-full h-80 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-neutral-900 rounded-xl overflow-hidden border border-indigo-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 w-full text-center py-2">
            <h3 className="text-lg font-semibold text-indigo-300">{project.title}</h3>
          </div>
        </div>

        {/* Back Side */}
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neutral-800 text-white rounded-xl p-6 flex items-center justify-center text-center border border-indigo-700">
  <p className="text-lg text-gray-100 leading-relaxed font-medium">
    {project.description}
  </p>
</div>

      </div>

      {/* GitHub and Demo Links */}
      <div className="flex gap-4 mt-4 justify-center">
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
        )}
        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        )}
      </div>
    </div>
  ))}
</div>

           
      </div>
    </section>
  );
}
