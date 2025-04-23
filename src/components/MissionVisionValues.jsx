import { motion } from 'framer-motion';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';

// Variantes para el título
const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: 'easeIn' } },
};

// Variantes para las tarjetas con stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

// Variantes para los íconos
const iconVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    rotate: -10,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

// Variante para el botón
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

function MissionVisionValues() {
  const items = [
    {
      icon: Target,
      title: 'Misión',
      text: 'Crear soluciones digitales que impacten positivamente a las personas y empresas.',
    },
    {
      icon: Eye,
      title: 'Visión',
      text: 'Ser un referente joven en innovación y desarrollo de software en Colombia.',
    },
    {
      icon: Heart,
      title: 'Valores',
      text: 'Compromiso, creatividad, empatía, crecimiento constante.',
    },
  ];

  return (
    <motion.section
      id="mission-vision-values"
      className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_50%)] opacity-50"></div>

      <div className="container mx-auto max-w-5xl z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight"
          variants={titleVariants}
        >
          Misión, Visión y Valores 🌟
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div variants={iconVariants}>
                <item.icon size={32} className="text-cyan-400 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón CTA */}
        <motion.div
          className="text-center"
          variants={buttonVariants}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Conoce mi trabajo
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MissionVisionValues;