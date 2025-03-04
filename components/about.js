import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-8"
      >
        <h2 className="text-4xl font-mono font-bold text-green-500 mb-8">
          Sobre mí
        </h2>
        <p className="text-lg text-gray-300">
          Soy un desarrollador frontend apasionado por crear interfaces de usuario
          atractivas y funcionales. Me especializo en tecnologías como React,
          Next.js y Tailwind CSS. ¡Me encanta aprender y enfrentar nuevos desafíos!
        </p>
      </motion.div>
    </div>
  );
}