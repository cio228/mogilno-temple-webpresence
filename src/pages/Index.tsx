
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import IntroSections from '../components/IntroSections';
import DonationModal from '../components/DonationModal';
import LocationMap from '../components/LocationMap';

const Index = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Introduction Sections */}
      <IntroSections />
      
      {/* Spiritual Quote Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl text-gray-800 mb-6 italic font-light">
              "Где двое или трое собраны во имя Мое, там Я посреди них"
            </blockquote>
            <cite className="text-gray-600 text-lg block mb-8">
              — Евангелие от Матфея 18:20
            </cite>
            
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Приглашаем всех верующих присоединиться к нашей духовной семье. 
              Вместе мы строим не только храм из камня, но и храм веры в наших сердцах.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Станьте частью нашей <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">духовной семьи</span>
            </h2>
            <p className="text-gray-600 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Ваша поддержка помогает нам создавать место, где каждый сможет найти 
              духовный покой и обрести связь с Божественным. Присоединяйтесь к нам 
              в молитве и созидании.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Link 
                to="/about" 
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
              >
                <div className="mb-2">📖</div>
                О нашем храме
              </Link>
              
              <Link 
                to="/construction" 
                className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
              >
                <div className="mb-2">🏗️</div>
                Узнать о строительстве
              </Link>
              
              <Link 
                to="/services" 
                className="group bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
              >
                <div className="mb-2">🕊️</div>
                Расписание служб
              </Link>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => setIsDonationModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                💝 Поддержать храм
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />

      {/* Pastor's Philosophy Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Философия прихода
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <blockquote className="text-xl md:text-2xl italic mb-6">
                "Никаких запретов"
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-6">
                У отца Алексея есть правило: никому не делать замечаний. Смысл таков: 
                не отпугнуть человека, ищущего путь к Богу.
              </p>
              <p className="text-gray-300 leading-relaxed">
                "Боюсь ли я, что подрастающее поколение не будет продолжать наше дело? Нет. 
                Надеюсь, молодежь для нового храма тоже найдется. Главное, чтобы вера была 
                не искусственная, а настоящая."
              </p>
              <cite className="block mt-6 text-yellow-400">— иерей Алексей Шишко</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 pointer-events-none z-10 hidden lg:block">
        <div className="relative">
          <div className="w-3 h-8 bg-gradient-to-t from-yellow-600 to-orange-300 rounded-full animate-pulse opacity-70"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
        </div>
        <div className="relative mt-4 ml-6">
          <div className="w-2.5 h-6 bg-gradient-to-t from-yellow-600 to-orange-300 rounded-full animate-pulse opacity-50"></div>
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full absolute -top-0.5 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
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
