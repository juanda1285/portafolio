import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-8"
      >
        <h2 className="text-4xl font-mono font-bold text-green-500 mb-8">
          Contacto
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Mensaje"
            rows="5"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-black font-mono font-bold rounded-lg hover:bg-green-400 transition-all"
          >
            Enviar
          </button>
        </form>
      </motion.div>
    </div>
  );
}