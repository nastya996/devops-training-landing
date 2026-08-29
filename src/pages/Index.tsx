import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Program from '@/components/Program';
import Teachers from '@/components/Teachers';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import Career from '@/components/Career';
import Faq from '@/components/Faq';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Program />
        <Teachers />
        <Pricing />
        <Reviews />
        <Career />
        <Faq />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
