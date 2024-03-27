import { ReactLenis } from "@studio-freight/react-lenis";
import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Services from "./sections/Services.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Gallery from "./sections/Gallery.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ReactLenis root>
      <Header />
      <main className="font-barlow font-semibold">
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
