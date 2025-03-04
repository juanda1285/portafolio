import { forwardRef } from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, name: "Proyecto 1", description: "Descripción del proyecto 1" },
  { id: 2, name: "Proyecto 2", description: "Descripción del proyecto 2" },
];

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="py-16 bg-black text-white">
      <h2 className="text-4xl font-mono font-bold text-green-500 text-center mb-8">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border border-green-500 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
          >
            <h3 className="text-2xl font-mono font-bold text-green-500">
              {project.name}
            </h3>
            <p className="mt-4 text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

Projects.displayName = "Projects"; // Necesario para evitar advertencias de React

export default Projects;
