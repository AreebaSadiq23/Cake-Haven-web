import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CakesSection from "./components/CakesSection";
import GallerySection from "./components/GallerySection";
import OrderingAndDelivery from "./components/OrderingAndDelivery";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <CakesSection />
      <GallerySection />
      <OrderingAndDelivery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
