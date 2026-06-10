import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import PosterGallery from "../components/PosterGallery";
import VideoGallery from "../components/VideoGallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <PosterGallery />
      <VideoGallery />
      <Contact />
      <Footer />
    </main>
  );
}
