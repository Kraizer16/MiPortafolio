import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, UserCheck, ArrowRight } from 'lucide-react';

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

function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Páginas Web Responsivas',
      summary: 'Diseño y desarrollo de páginas web responsivas.',
      description: 'Creo sitios web modernos, optimizados para todos los dispositivos, con interfaces intuitivas y diseños personalizados que destacan tu marca.',
    },
    {
      icon: Server,
      title: 'Backends y APIs',
      summary: 'Backends en Node.js y Java con APIs REST.',
      description: 'Desarrollo APIs RESTful robustas y escalables usando Node.js y Java, integradas con bases de datos para soluciones backend eficientes.',
    },
    {
      icon: UserCheck,
      title: 'Asesorías de Programación',
      summary: 'Asesorías personalizadas de programación para principiantes.',
      description: 'Ofrezco mentorías personalizadas para principiantes, enseñando fundamentos de programación y buenas prácticas en un entorno amigable.',
    },
  ];

  // Estado para controlar el flip de cada tarjeta
  const [flippedStates, setFlippedStates] = useState(
    services.map(() => false)
  );

  // Función para alternar el flip de una tarjeta específica
  const toggleFlip = (index) => {
    console.log(`Clicked card: ${services[index].title}, toggling flip`); // Depuración
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <motion.section
      id="services"
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
          Servicios 🚀
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            console.log(`Rendering card: ${service.title}`); // Depuración
            return (
              <motion.div
                key={`${service.title}-${index}`}
                className="relative w-full min-h-[300px] perspective cursor-pointer"
                variants={itemVariants}
                onClick={() => toggleFlip(index)}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(34, 211, 238, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Contenedor para el efecto de volteo */}
                <AnimatePresence mode="wait">
                  <motion.div
                    className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
                      flippedStates[index] ? 'rotate-y-180' : ''
                    }`}
                    initial={{ rotateY: flippedStates[index] ? 180 : 0 }}
                    animate={{ rotateY: flippedStates[index] ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Lado frontal (título, ícono, resumen) */}
                    <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center backface-hidden hover:border-cyan-400 transition-all duration-300">
                      <motion.div
                        variants={iconVariants}
                        whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                      >
                        <service.icon size={56} className="text-cyan-400 mb-6" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">{service.title}</h3>
                      <p className="text-lg md:text-xl text-gray-100 px-6">{service.summary}</p>
                    </div>

                    {/* Lado trasero (descripción detallada) */}
                    <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl border border-cyan-400 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180">
                      <motion.p
                        className="text-xl md:text-2xl leading-relaxed text-gray-100 px-6"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
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

export default Services;