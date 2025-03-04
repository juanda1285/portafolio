import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Efecto Matrix (líneas de código cayendo) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-2 w-0.5 bg-green-500 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-mono font-bold text-green-500">
          Hola, soy Juan Arias
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Desarrollador FullStack | Creando experiencias digitales increíbles
        </p>
        <button className="mt-8 px-6 py-3 bg-green-500 text-black font-mono font-bold rounded-lg hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/50">
          Ver mis proyectos
        </button>
      </motion.div>
    </div>
  );
}