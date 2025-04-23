import { motion } from 'framer-motion';
import { ArrowDown, Code } from 'lucide-react';

// Variantes para animaciones con stagger
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

// Variantes para los elementos
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: 'easeIn' } },
};

// Variante para el ícono
const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

// Variante para la frase "Backend Developer"
const subtitleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -30,
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

function Profile() {
  return (
    <motion.section
      id="profile"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 px-6 py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      {/* Fondo decorativo (efecto sutil de partículas) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)] opacity-70"></div>

      <motion.div
        className="text-center max-w-4xl mx-auto z-10"
        variants={containerVariants}
      >
        {/* Ícono en lugar de la imagen */}
        <motion.div
          className="mb-6"
          variants={iconVariants}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-cyan-400 flex items-center justify-center">
              <Code size={64} className="text-cyan-400" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-pulse opacity-50"></div>
          </div>
        </motion.div>

        {/* Título */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-2 tracking-tight font-sans"
          variants={itemVariants}
        >
          Hola, soy Marlon Chacón 👋
        </motion.h2>

        {/* Frase "Backend Developer" */}
        <motion.h3
          className="text-2xl md:text-3xl font-light text-cyan-300 mb-6 tracking-wide"
          variants={subtitleVariants}
        >
          Backend Developer
        </motion.h3>

        {/* Descripción */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Apasionado por crear soluciones digitales innovadoras, especializado en desarrollo backend y frontend con un enfoque en rendimiento y usabilidad.
        </motion.p>

        {/* Botón CTA */}
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explora mis proyectos
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Profile;