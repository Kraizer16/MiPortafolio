import Header from './components/Header';
import Profile from './components/Profile';
import Objectives from './components/Objectives';
import MissionVisionValues from './components/MissionVisionValues';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Profile />
        <Objectives />
        <MissionVisionValues />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;