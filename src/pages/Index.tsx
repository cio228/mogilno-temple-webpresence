
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import IntroSections from '../components/IntroSections';
import DonationModal from '../components/DonationModal';

const Index = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Introduction Sections */}
      <IntroSections />
      
      {/* Spiritual Quote Section */}
      <section className="py-16 bg-orthodox-light relative overflow-hidden">
        <div className="orthodox-pattern absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <blockquote className="font-heading text-2xl md:text-3xl text-orthodox-navy mb-6 italic">
              "Где двое или трое собраны во имя Мое, там Я посреди них"
            </blockquote>
            <cite className="text-orthodox-text-light text-lg">
              — Евангелие от Матфея 18:20
            </cite>
            <div className="divider-golden"></div>
            <p className="text-orthodox-text leading-relaxed">
              Приглашаем всех верующих присоединиться к нашей духовной семье. 
              Вместе мы строим не только храм из камня, но и храм веры в наших сердцах.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="font-heading text-3xl md:text-4xl text-orthodox-navy mb-6">
              Станьте частью нашей духовной семьи
            </h2>
            <p className="text-orthodox-text text-lg mb-8 leading-relaxed">
              Ваша поддержка помогает нам создавать место, где каждый сможет найти 
              духовный покой и обрести связь с Божественным. Присоединяйтесь к нам 
              в молитве и созидании.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/construction" className="btn-sacred">
                Узнать о строительстве
              </Link>
              <Link to="/services" className="btn-golden">
                Расписание служб
              </Link>
              <button 
                onClick={() => setIsDonationModalOpen(true)}
                className="btn-golden"
              >
                Поддержать храм
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Candles Decoration */}
      <div className="fixed bottom-8 right-8 pointer-events-none z-10 hidden lg:block">
        <div className="relative">
          <div className="w-3 h-8 bg-gradient-to-t from-orthodox-gold to-orange-300 rounded-full animate-float opacity-60"></div>
          <div className="w-2 h-2 bg-orthodox-gold rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-sacred-glow"></div>
        </div>
        <div className="relative mt-4 ml-6">
          <div className="w-2.5 h-6 bg-gradient-to-t from-orthodox-gold to-orange-300 rounded-full animate-float-delayed opacity-50"></div>
          <div className="w-1.5 h-1.5 bg-orthodox-gold rounded-full absolute -top-0.5 left-1/2 transform -translate-x-1/2 animate-sacred-glow"></div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
