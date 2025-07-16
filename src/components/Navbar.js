'use client';
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-neutral-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link href="/">Krithika</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">Home</a>
          <a href="#about" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">About</a>
          <a href="#projects" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">Projects</a>
          <a href="#skills" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">Skills</a>
          <a href="#certifications" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">Certifications</a>
          <a href="#contact" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-neutral-900">
          <a href="#hero" className="block text-gray-700 dark:text-white hover:text-indigo-600 transition">Home</a>
          <a href="#about" className="block text-gray-700 dark:text-white hover:text-indigo-600 transition">About</a>
          <a href="#projects" className="block text-gray-700 dark:text-white hover:text-indigo-600 transition">Projects</a>
          <a href="#skills" className="block text-gray-700 dark:text-white hover:text-indigo-600 transition">Skills</a>
          <a href="#certifications" className="block text-gray-700 dark:text-white hover:text-indigo-600 transition">Certifications</a>
          <a href="#contact" className="block text-gray-700 dark:text-white hover:text-indigo-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
