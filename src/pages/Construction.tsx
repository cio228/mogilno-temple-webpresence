
import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, ArrowDown, Heart, Users, Calendar } from 'lucide-react';
import BackToHomeButton from '../components/BackToHomeButton';

const Construction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <BackToHomeButton variant="arrow" position="top-left" />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Church className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Строительство храма
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Возведение уникального деревянного храма в традициях православного зодчества
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-yellow-400" />
        </div>
      </section>

      {/* Construction Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              3 года ожидания
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                В Могильно часы будто останавливаются — наверное, потому что не надо никуда спешить. 
                Однако за ходом времени тут следят и помнят, особенно в последние годы. У людей появилась надежда: 
                подарил им ее именно отец Алексей.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">О настоятеле</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Батюшка родился в Узде, но долго не бывал на малой родине — учился на иконописца в Санкт-Петербурге. 
                  Там познакомился с будущей женой, она из Мурманска.
                </p>
                <blockquote className="italic text-gray-800 border-l-4 border-yellow-500 pl-4">
                  "Когда возник вопрос, где служить, начали искать место в Беларуси — поближе к Минску, 
                  но именно в деревне. Так Могильно и стало нашим домом."
                </blockquote>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Уникальная архитектура</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Вскоре родилась идея построить храм, но обязательно такой же, как и агрогородок, — душевный. 
                Поэтому в качестве материала выбрали дерево. Вдохновлялся батюшка чертежами старинных храмов.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Материалы</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Основа храма — сосна</li>
                    <li>• Купола — осина и лиственница</li>
                    <li>• Кресты — дерево</li>
                    <li>• Традиционные технологии рубки</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Особенности</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Воссоздание старинных традиций</li>
                    <li>• Ручная работа мастеров</li>
                    <li>• Экологичные материалы</li>
                    <li>• Уникальная архитектура</li>
                  </ul>
                </div>
              </div>

              <blockquote className="bg-gray-100 border-l-4 border-blue-500 pl-6 py-4 italic text-gray-800 mb-8">
                "Белорусские рубщики в такой манере никогда не работали, но с Божьей помощью все получается как на картинке."
                <footer className="text-sm text-gray-600 mt-2">— из рассказа о строительстве</footer>
              </blockquote>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Слова строителя</h3>
                <p className="text-gray-700 italic">
                  "Работы еще очень много, но она дается легко и физически, и морально"
                </p>
                <p className="text-sm text-gray-600 mt-2">— строитель Александр</p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Народное строительство</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Отец Алексей томится в ожидании — мечтает поскорее заняться росписью храма. 
                Он получается действительно народным: понемногу жертвуют государственные предприятия, 
                колхоз и простые люди — даже с Аляски.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Всем уже не терпится увидеть, как преобразится Могильно с появлением новой достопримечательности.
              </p>

              <div className="text-center">
                <Link 
                  to="/" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 mr-4"
                >
                  Поддержать строительство
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Расписание служб
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
