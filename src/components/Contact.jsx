import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send, Github, Phone } from 'lucide-react';

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

// Variante para el formulario
const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
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

function Contact() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para validación y feedback
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  // Manejar cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    return newErrors;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form:', formData); // Depuración

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        console.log('Form submitted successfully'); // Depuración
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error); // Depuración
    }

    // Resetear estado después de 5 segundos
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-gray-100 relative overflow-y-auto"
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
          variants={itemVariants}
        >
          Contacto 📬
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto w-full"
          variants={containerVariants}
        >
          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 shadow-xl"
            variants={formVariants}
            whileHover={{ borderColor: '#22D3EE' }} // cyan-400
          >
            {/* Campo Nombre */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="flex items-center gap-2 text-lg md:text-xl font-semibold text-gray-100 mb-2">
                <User size={24} className="text-cyan-400" />
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-gray-900 text-gray-100 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none transition-all duration-300"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>

            {/* Campo Correo */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="flex items-center gap-2 text-lg md:text-xl font-semibold text-gray-100 mb-2">
                <Mail size={24} className="text-cyan-400" />
                Correo
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 bg-gray-900 text-gray-100 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none transition-all duration-300"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Campo Mensaje */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="flex items-center gap-2 text-lg md:text-xl font-semibold text-gray-100 mb-2">
                <MessageSquare size={24} className="text-cyan-400" />
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                rows="5"
                className="w-full px-4 py-3 bg-gray-900 text-gray-100 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>

            {/* Botón Enviar */}
            <motion.div className="text-center" variants={buttonVariants}>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-gray-900 font-semibold text-lg rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cyan-600 shadow-lg ${
                  status === 'sending'
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-cyan-300 hover:-translate-y-1'
                }`}
                whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(34, 211, 238, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                <Send size={20} />
              </button>
            </motion.div>

            {/* Mensaje de estado */}
            {status === 'success' && (
              <motion.p
                className="text-green-400 text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="text-red-400 text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Error al enviar el mensaje. Intenta de nuevo.
              </motion.p>
            )}
          </motion.form>

          {/* Enlaces sociales */}
          <motion.div
            className="flex justify-center gap-6 mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:marlonchacon.dev@gmail.com"
              className="flex items-center gap-2 text-lg text-gray-100 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="text-cyan-400" />
              marlonacg1603@gmail.com
            </motion.a>
            <motion.a
              href="tel:+573100000000"
              className="flex items-center gap-2 text-lg text-gray-100 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={24} className="text-cyan-400" />
              3012787447
            </motion.a>
            <motion.a
              href="https://github.com/kraizer16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-gray-100 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="text-cyan-400" />
              github.com/kraizer16
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;