import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Database,
  GitBranch,
  Palette,
  Server,
  Cpu,
  Users,
  MessageSquare,
  Lightbulb,
  Heart,
  Clock,
  Star,
} from 'lucide-react';

// Variantes para el título
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: 'easeIn' } },
};

// Variantes para las tarjetas con stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

// Variantes para los íconos
const iconVariants = {
  hidden: { opacity: 0, rotate: -15 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    rotate: -15,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

// Variantes para los botones
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

function Skills() {
  const [showTechnical, setShowTechnical] = useState(true);

  const technicalSkills = [
    { icon: Code, name: 'Node.js' },
    { icon: Database, name: 'MongoDB' },
    { icon: GitBranch, name: 'Git & GitHub' },
    { icon: Palette, name: 'Tailwind CSS' },
    { icon: Server, name: 'Express.js' },
    { icon: Cpu, name: 'React' },
  ];

  const softSkills = [
    { icon: Users, name: 'Trabajo en equipo' },
    { icon: MessageSquare, name: 'Comunicación' },
    { icon: Lightbulb, name: 'Resolución de problemas' },
    { icon: Heart, name: 'Empatía' },
    { icon: Clock, name: 'Gestión del tiempo' },
    { icon: Star, name: 'Adaptabilidad' },
  ];

  return (
    <motion.section
      id="skills"
      className="py-32 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-gray-100 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.2),transparent_60%)] opacity-60"></div>

      <div className="container mx-auto max-w-7xl z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center tracking-tight"
          variants={titleVariants}
        >
          Habilidades 💻
        </motion.h2>

        {/* Indicador de estado para depuración */}
        <motion.p
          className="text-center text-lg mb-6 text-gray-300"
          variants={buttonVariants}
        >
          Mostrando: {showTechnical ? 'Habilidades Técnicas' : 'Habilidades Blandas'}
        </motion.p>

        {/* Botones para alternar */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          variants={buttonVariants}
        >
          <motion.button
            onClick={() => {
              console.log('Técnicas clicked, showTechnical:', showTechnical);
              setShowTechnical(true);
            }}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform ${
              showTechnical
                ? 'bg-cyan-400 text-gray-900 shadow-lg'
                : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
            } focus:outline-none focus:ring-2 focus:ring-cyan-400 z-20 hover:-translate-y-1`}
            whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Técnicas
          </motion.button>
          <motion.button
            onClick={() => {
              console.log('Blandas clicked, showTechnical:', showTechnical);
              setShowTechnical(false);
            }}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform ${
              !showTechnical
                ? 'bg-cyan-400 text-gray-900 shadow-lg'
                : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
            } focus:outline-none focus:ring-2 focus:ring-cyan-400 z-20 hover:-translate-y-1`}
            whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Blandas
          </motion.button>
        </motion.div>

        {/* Tarjetas de habilidades */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showTechnical ? 'technical' : 'soft'}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {(showTechnical ? technicalSkills : softSkills).map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center min-h-[220px]"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(34, 211, 238, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <skill.icon
                    size={48}
                    className={showTechnical ? 'text-cyan-300' : 'text-teal-300'}
                  />
                </motion.div>
                <h3
                  className={`text-xl md:text-2xl font-bold mt-6 ${
                    showTechnical ? 'text-cyan-300' : 'text-teal-300'
                  }`}
                >
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Skills;