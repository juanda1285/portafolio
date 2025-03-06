import { Project } from '@/types/types';


interface ModalProps {
  project: Project;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4">
        <div className="bg-gray-900 text-white p-6 rounded-lg max-w-4xl w-full relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
          <h2 className="text-3xl font-bold text-green-500 text-center mb-4">
            {project.name}
          </h2>
          <h5 className="text-3xl font-bold text-green-200 text-center mb-4">
            {project.company}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4"
              />
              <ul className="list-disc list-inside text-gray-300">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-300 mb-4">{project.fullDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500 text-black rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }