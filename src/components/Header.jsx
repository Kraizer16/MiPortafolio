import { useState } from 'react';
import { Home, Target, Award, Hammer, Briefcase, Mail, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-gray-100 py-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo o Nombre */}
        <div className="text-2xl font-bold tracking-tight">
          <a href="#home">Tech Portafolio</a>
        </div>

        {/* Botón hamburguesa para móviles */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out`}
        >
          {[
            { href: '#profile', icon: Home, label: 'Inicio' },
            { href: '#objectives', icon: Target, label: 'Objetivos' },
            { href: '#skills', icon: Award, label: 'Skills' },
            { href: '#services', icon: Hammer, label: 'Servicios' },
            { href: '#projects', icon: Briefcase, label: 'Proyectos' },
            { href: '#contact', icon: Mail, label: 'Contacto' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative flex items-center gap-2 text-gray-100 hover:text-cyan-400 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {/* Subrayado animado */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;