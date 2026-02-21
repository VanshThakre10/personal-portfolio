import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-brand-background min-h-screen text-white">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
