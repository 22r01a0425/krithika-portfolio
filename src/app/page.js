'use client'

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-scroll scroll-smooth">
  <section id="hero" className="snap-start h-screen"><Hero /></section>
  <section id="about" className="snap-start h-screen"><About /></section>
  <section id="projects" className="snap-start h-screen"><Projects /></section>
  <section id="skills" className="snap-start min-h-screen"><Skills /></section>
  <section id="certifications" className="snap-start min-h-screen"><Certifications /></section>
  <section id="contact" className="snap-start h-screen"><Contact /></section>
</div>

      <Footer />
    </>
  );
}
