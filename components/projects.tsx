import { useState } from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Modal from "./modal";

const projects = [
  {
    id: 1,
    name: "MovilGo",
    company: "Reactiva S.A.S - Manizales",
    description: "Venta de Rifas, pines y recargas",
    fullDescription:
      "Movilgo es una pagina que ofrece recargas , venta de rifas, pines y otros servicios. Este proyecto fue mi primera experiencia profesional que desarrollé utilizando ReactJs y Odoo.",
    image: "/movilGo.png",
    achievements: [
      "Optimización de rendimiento",
      "Pagina Responsive",
      "Patrones de diseño",
    ],
    technologies: ["JavaScript", "React", "Bootstrap", "Odoo", "Responsive", "PL/SQL"],
  },
  {
    id: 2,
    name: "Mitecnova",
    company: "Reactiva S.A.S - Manizales",
    description: "Micro-créditos en línea",
    fullDescription:
      "Es una plataforma brinda micro-créditos para que puedas solucionar situaciones imprevistas de corto plazo. Esta aplicación fue desarrollada con Reactjs y Odoo.",
    image: "/mitecnova.png",
    achievements: [
      "Optimización de rendimiento",
      "Pagina Responsive",
      "Patrones de diseño",
    ],
    technologies: ["JavaScript", "React", "Bootstrap", "Odoo", "Responsive", "PL/SQL"],
  },
  {
    id: 3,
    name: "Planit",
    company: "Verne SAS - Bogotá",
    description: "Desarrollo de E-commerce y WMS (Angular,Flutter,Java SpringBoot)",
    fullDescription:
      "En esta compañia creé una e-commerce (Angular) para venta de productos por medio de subscripciones, aplicación movil en flutter y un WMS (React) para la gestión de inventarios. Este proyecto fue desarrollado con Angular, React, Java SpringBoot, Flutter y AWS.",
    image: "https://i.ibb.co/RTMDJ2Pt/planit-Manager.png",
    achievements: [
      "Integración con API externas(GoogleMaps , Alegra, Twilio , Sendgrid , PayU)",
      "Manejo de estado avanzado",
      "Implementacion de CI/CD",
      "UI/UX optimizada",
      "Manejo de subscripciones, pagos recurrentes y cupones de descuento",
    ],
    technologies: ["Angular", "React", "Java SpringBoot", "MaterialUI", "Typescript", "Flutter", "GraphQl", "Amplify", "AWS"],
  },
  {
    id: 4,
    name: "tuPlaza",
    company: "GrupoTuPlaza SAS - Cali",
    description: "E-commerce Vue2 ",
    fullDescription:
      "Creación de una tienda virtual para la venta de frutas y verduras (ecommerce y gestión de ordenes e invetarios). Este proyecto implementaba cargas de ordenes masivas (Excel + Python), contaba con autenticación por medio de JWT y OAuth2.0, integración con API de pagos y envios, facturación electronica (Alegra), GoogleAnalytics etc.",
    image: "/tuPlazaTienda.png",
    achievements: [
      "Lazy loading",
      "Optimización de rendimiento",
      "CMS para la gestión de contenidos",
      "Firmas electronica",
    ],
    technologies: ["Vue2", "Vuetify", "Node.js", "Express", "SASS", "Quasar", "Firestore", "Python", "JWT", "OAuth2.0", "Alegra", "GoogleAnalytics", "AWS"],
  },
];

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <div ref={ref} className="py-16 bg-black text-white">
      <h2 className="text-4xl font-mono font-bold text-green-500 text-center mb-8">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-[350px] p-4 border border-green-500 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all cursor-pointer flex flex-col items-center"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-[60%] h-60 rounded-lg"
            />
            <h3 className="text-xl font-mono font-bold text-green-500 mt-3">
              {project.name}
            </h3>
            <p className="mt-1 text-gray-300 text-sm text-center">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>

  );
});

Projects.displayName = "Projects"; // Necesario para evitar advertencias de React

export default Projects;
