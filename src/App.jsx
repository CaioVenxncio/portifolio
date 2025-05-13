import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher'; // Import ThemeSwitcher

const Navbar = () => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiência' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 fixed w-full z-10 top-0 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">Caio Venancio</a>
        <div className="flex items-center space-x-4">
          {navItems.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <ThemeSwitcher /> {/* Add ThemeSwitcher to Navbar */}
        </div>
      </div>
    </nav>
  );
};

function App() {
  // Add smooth scroll behavior to html element
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-16"> {/* Add padding to main to offset fixed navbar */}
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-center p-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} Caio Venancio. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Desenvolvido com React, Tailwind CSS e ❤️</p>
      </footer>
    </div>
  );
}

export default App;

