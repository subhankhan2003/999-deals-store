import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import WhyChooseUs from './components/WhyChooseUs';
import DealBanner from './components/DealBanner';
import Reviews from './components/Reviews';
import Delivery from './components/Delivery';
import OrderCTA from './components/OrderCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Hero />
      <ProductsSection />
      <WhyChooseUs />
      <DealBanner />
      <Reviews />
      <Delivery />
      <OrderCTA />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
