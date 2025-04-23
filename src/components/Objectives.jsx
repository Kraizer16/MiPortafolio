import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, BookOpen, ArrowRight } from 'lucide-react';

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
  hidden: { opacity: 0, rotate: -15 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    rotate: -15,
    transition: { duration: 0.5, ease: 'easeIn' },
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

// Variante para el botón
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

function Objectives() {
  const objectives = [
    {
      icon: Code,
      title: 'Desarrollador Full Stack',
      text: 'Convertirme en un desarrollador Full Stack competente, dominando tanto el backend como el frontend.',
      size: 'h-[360px] md:h-[360px]',
      isCenter: false,
    },
    {
      icon: Rocket,
      title: 'Impacto Tecnológico',
      text: 'Impactar positivamente con soluciones tecnológicas que resuelvan problemas reales.',
      size: 'h-[420px] md:h-[420px]',
      isCenter: true,
    },
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      text: 'Aprender constantemente nuevas tecnologías para estar a la vanguardia.',
      size: 'h-[360px] md:h-[360px]',
      isCenter: false,
    },
  ];

  // Estado para controlar el flip de cada tarjeta
  const [flippedStates, setFlippedStates] = useState(
    objectives.map(() => false)
  );

  // Función para alternar el flip de una tarjeta específica
  const toggleFlip = (index) => {
    console.log(`Clicked card: ${objectives[index].title}, toggling flip`); // Depuración
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <motion.section
      id="objectives"
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
          className="text-6xl md:text-7xl font-bold mb-20 text-center tracking-tight"
          variants={titleVariants}
        >
          Objetivos Profesionales 🎯
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {objectives.map((objective, index) => {
            console.log(`Rendering card: ${objective.title}`); // Depuración
            return (
              <motion.div
                key={`${objective.title}-${index}`}
                className={`relative w-full ${objective.size} perspective cursor-pointer`}
                variants={itemVariants}
                onClick={() => toggleFlip(index)}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(34, 211, 238, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Contenedor para el efecto de volteo */}
                <div
                  className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
                    flippedStates[index] ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Lado frontal (título e ícono) */}
                  <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center backface-hidden hover:border-cyan-400 transition-all duration-300">
                    <motion.div
                      variants={iconVariants}
                      whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                    >
                      <objective.icon size={56} className="text-cyan-400 mb-6" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300">{objective.title}</h3>
                  </div>

                  {/* Lado trasero (texto) */}
                  <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl border border-cyan-400 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180">
                    <motion.p
                      className="text-xl md:text-2xl leading-relaxed text-gray-100 px-6"
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {objective.text}
                    </motion.p>
                  </div>
                </div>
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
            href="#"
            className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-400 text-gray-900 font-semibold text-lg rounded-lg hover:bg-cyan-300 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cyan-600 shadow-lg hover:-translate-y-1"
            whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explora mi trabajo
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Estilos CSS globales para el efecto de volteo */}
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

export default Objectives;