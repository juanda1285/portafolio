import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaJava,
  FaPhp,
  FaAws,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiAngular,
  SiMysql,
} from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <SiAngular />, name: 'Angular' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiMysql />, name: 'MYSQL' },
  { icon: <FaGitAlt />, name: 'Git' },
];

export default function Skills() {
  return (
    <div className="py-16 bg-black text-white">
      <h2 className="text-4xl font-mono font-bold text-green-500 text-center mb-12">
        Habilidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-2 border border-green-500 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all max-w-[150px] w-full"
          >
            <div className="text-3xl text-green-500">{skill.icon}</div>
            <p className="mt-2 text-sm text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}