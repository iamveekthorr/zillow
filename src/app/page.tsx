import { NextPage } from 'next';
import { HeroSection } from '@/components/hero/hero.component';
import Services from '@/components/services/services.component';

const Home: NextPage = () => {
  return (
    <main>
      <HeroSection />
      <Services />
    </main>
  );
};

export default Home;
