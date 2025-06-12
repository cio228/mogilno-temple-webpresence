
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=')]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Orthodox Cross */}
          <div className="mb-8 flex justify-center">
            <div className="relative animate-pulse">
              <div className="w-1 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 mx-auto"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 absolute top-4 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-6 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 absolute top-8 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 absolute bottom-2 left-1/2 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent leading-tight">
            Храм Святого Николая
          </h1>
          
          <h2 className="text-xl md:text-3xl text-gray-300 mb-8 font-light">
            в агрогородке Могильно
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
            Добро пожаловать в духовный дом нашей общины. Здесь каждый найдет покой для души 
            и укрепление в вере. Мы строим не только храм из камня, но и храм любви в наших сердцах.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              О нашем храме
            </Link>
            <Link 
              to="/services"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Расписание служб
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
