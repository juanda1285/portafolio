import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden p-4">
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

            {/* Contenedor principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full px-4">
                {/* Columna izquierda: Hero */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-green-500">
                        Hola, soy Juan Arias (Work in progress)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Desarrollador Frontend | Creando experiencias digitales increíbles
                    </p>
                    <button className="px-6 py-3 bg-green-500 text-black font-mono font-bold rounded-lg hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/50 w-fit">
                        Ver mis proyectos
                    </button>
                </motion.div>

                {/* Columna derecha: About */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col justify-center space-y-6"
                >
                    {/* Foto o ilustración (opcional) */}
                    <div className="w-48 h-48 mx-auto flex items-center justify-center mb-[-35px]">
                        <span className="text-4xl text-green-500">👨‍💻</span>
                    </div>

                    {/* Descripción breve */}
                    <p className="text-base md:text-lg text-gray-300 text-center">
                        Soy un desarrollador frontend apasionado por crear interfaces de usuario
                        atractivas y funcionales. Me especializo en tecnologías como Angular, React,
                        Next.js, Vue y Tailwind CSS. ¡Me encanta aprender y enfrentar nuevos desafíos!
                    </p>

                    {/* Enlaces a redes sociales (opcional) */}
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="https://github.com/juanda1285/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 transition-all"
                        >
                            <span>GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/juan-david-arias-arias-62394b244/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 transition-all"
                        >
                            <span>LinkedIn</span>
                        </Link>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}