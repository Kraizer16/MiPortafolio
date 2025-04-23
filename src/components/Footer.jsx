import { motion } from 'framer-motion';
import { Mail, Phone, Github } from 'lucide-react';

// Variantes para animaciones con stagger
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

// Variantes para los elementos
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: 'easeIn' } },
};

// Variante para los íconos
const iconVariants = {
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
  rest: {
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: 'marlonacg1603@gmail.com',
      label: 'marlonacg1603@gmail.com',
    },
    {
      icon: Phone,
      href: 'tel:+573012787447',
      label: '+57 301 278 7447',
    },
    {
      icon: Github,
      href: 'https://github.com/kraizer16',
      label: 'github.com/marlonchacon',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  const handleLinkClick = (label) => {
    console.log(`Clicked social link: ${label}`); // Depuración
  };

  const handleHoverStart = (label) => {
    console.log(`Hover started on: ${label}`); // Depuración
  };

  const handleHoverEnd = (label) => {
    console.log(`Hover ended on: ${label}`); // Depuración
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-12 px-6 relative"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.25),transparent_60%)] opacity-70"></div>

      <div className="container mx-auto max-w-7xl z-10">
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-t-2xl border border-gray-700 p-8 text-center"
          variants={containerVariants}
        >
          {/* Enlaces sociales */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.target || '_self'}
                rel={link.rel}
                className="flex items-center gap-2 text-lg md:text-xl text-gray-100 hover:text-cyan-400 transition-all duration-300"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick(link.label)}
                onHoverStart={() => handleHoverStart(link.label)}
                onHoverEnd={() => handleHoverEnd(link.label)}
              >
                <link.icon size={24} className="text-cyan-400" />
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Marlon Chacón - Todos los derechos reservados.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;