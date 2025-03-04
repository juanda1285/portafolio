import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>[JDA] - Portafolio</title>
        <meta name="description" content="Juan_D_Arias, desarrollador frontend especializado en crear experiencias digitales increíbles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sección Hero */}
      <Hero />

      {/* Sección Sobre mí */}
      <About />

      {/* Sección Proyectos */}
      <Projects />

      {/* Sección Habilidades */}
      <Skills />

      {/* Sección Contacto */}
      <Contact />
    </>
  );
}