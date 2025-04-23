import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, School, ArrowRight, Github } from 'lucide-react';

// Variantes para el título
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: 'easeIn' } },
};

// Variantes para la introducción
const introVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: 'easeIn' } },
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
  exit: { opacity: 0, transition: { duration: 0.5 } },
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
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

// Variantes para los íconos
const iconVariants = {
  hidden: { opacity: 0, rotate: -15, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    rotate: -15,
    scale: 0.9,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
  rest: {
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    scale: 1.3,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

// Variante para el texto en el lado trasero
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
  },
};

// Variante para los botones
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
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

function Projects() {
  const projects = [
    {
      icon: Users,
      title: 'ParcheseACapp',
      summary: 'App de eventos creada para conectar personas con actividades afines.',
      description:
        'ParcheseACapp es una aplicación web que permite a los usuarios descubrir y unirse a eventos locales basados en sus intereses. Desarrollada con React, Node.js, y MongoDB, ofrece una interfaz intuitiva, filtros personalizados, y notificaciones en tiempo real.',
      github: 'https://github.com/kraizer16',
    },
    {
      icon: School,
      title: 'Sistema ACME Education',
      summary: 'Gestión de estudiantes y docentes con autenticación encriptada.',
      description:
        'ACME Education es un sistema de gestión educativa que facilita la administración de estudiantes, docentes, y cursos. Construido con Java, Spring Boot, y MySQL, incluye autenticación segura con JWT y un panel de control interactivo.',
      github: 'https://github.com/kraizer16',
    },
  ];

  const [flippedStates, setFlippedStates] = useState(projects.map(() => false));

  const toggleFlip = (index) => {
    console.log(`Clicked card: ${projects[index].title}, toggling flip`);
    setFlippedStates((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  const handleHoverStart = (title) => {
    console.log(`Hover started on icon: ${title}`);
  };

  const handleHoverEnd = (title) => {
    console.log(`Hover ended on icon: ${title}`);
  };

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-gray-100 relative overflow-y-auto"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.25),transparent_60%)] opacity-70"></div>

      <div className="container mx-auto max-w-7xl z-10 flex-grow flex flex-col justify-center py-16">
        <motion.h2
          className="text-6xl md:text-7xl font-bold mb-12 text-center tracking-tight"
          variants={titleVariants}
        >
          Proyectos 💻
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
          variants={introVariants}
        >
          Explora mis proyectos más destacados, diseñados para resolver problemas reales con tecnología innovadora. Cada uno refleja mi pasión por el desarrollo y el aprendizaje continuo.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => {
            console.log(`Rendering card: ${project.title}`);
            return (
              <motion.div
                key={`${project.title}-${index}`}
                className="relative w-full min-h-[400px] perspective cursor-pointer"
                variants={itemVariants}
                onClick={() => toggleFlip(index)}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(34, 211, 238, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
                      flippedStates[index] ? 'rotate-y-180' : ''
                    }`}
                    initial={{ rotateY: flippedStates[index] ? 180 : 0 }}
                    animate={{ rotateY: flippedStates[index] ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Lado frontal */}
                    <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl border border-gray-700 flex flex-col items-center justify-between text-center backface-hidden hover:border-cyan-400 transition-all duration-300 p-8">
                      <div className="flex flex-col items-center">
                        <div
                          className="relative"
                          onMouseEnter={() => handleHoverStart(project.title)}
                          onMouseLeave={() => handleHoverEnd(project.title)}
                        >
                          <motion.div
                            variants={iconVariants}
                            initial="rest"
                            animate={flippedStates[index] ? 'hidden' : 'visible'}
                            whileHover="hover"
                          >
                            <project.icon size={56} className="text-cyan-400 mb-6" />
                          </motion.div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">{project.title}</h3>
                        <p className="text-lg md:text-xl text-gray-100 mb-6">{project.summary}</p>
                      </div>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cyan-600 shadow-lg hover:-translate-y-1"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(34, 211, 238, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver en GitHub
                        <Github size={20} />
                      </motion.a>
                    </div>

                    {/* Lado trasero */}
                    <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl border border-cyan-400 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180 p-8">
                      <motion.p
                        className="text-xl md:text-2xl leading-relaxed text-gray-100 px-6"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {project.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Botón CTA */}
        <motion.div
          className="text-center mt-16"
          variants={buttonVariants}
        >
          <motion.a
            href="https://github.com/kraizer16"
            className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-400 text-gray-900 font-semibold text-lg rounded-lg hover:bg-cyan-300 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cyan-600 shadow-lg hover:-translate-y-1"
            whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explora más proyectos
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @media (max-width: 768px) {
          .min-h-screen {
            min-height: auto;
            height: auto;
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </motion.section>
  );
}

export default Projects;