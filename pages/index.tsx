"use client";
import { useRef } from "react";
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Head from 'next/head';


export default function Home() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Head>
        <title>[JDA] - Portafolio</title>
        <meta name="description" content="Juan_D_Arias, desarrollador frontend especializado en crear experiencias digitales increíbles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sección Hero */}
      <Hero scrollToProjects={scrollToProjects} />

      {/* Sección Sobre mí */}
      {/* <About /> */}

      {/* Sección Proyectos */}
      <Projects ref={projectsRef} />

      {/* Sección Habilidades */}
      <Skills />

      {/* Sección Contacto */}
      <Contact />
    </>
  );
}