
import React from 'react';

const IntroSections = () => {
  return (
    <div className="bg-white">
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  О нашем храме
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Храм Святого Николая в селе Могильно - это место, где традиции православной веры 
                  живут и процветают уже многие десятилетия. Наша община объединяет верующих 
                  всех возрастов в духе любви, милосердия и взаимопомощи.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Мы приглашаем каждого стать частью нашей духовной семьи, где вера укрепляется 
                  через молитву, богослужения и добрые дела.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">✦</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Наша миссия</h3>
                  <p className="text-gray-600 text-sm">
                    Сохранение и распространение православных традиций, 
                    духовное окормление прихожан
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Богослужения и мероприятия
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">🕊️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Воскресная служба</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Каждое воскресенье в 9:00 совершается Божественная литургия
                </p>
                <div className="text-blue-600 font-medium">Воскресенье, 9:00</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 text-xl">📖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Изучение Писания</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Еженедельные встречи для изучения Священного Писания
                </p>
                <div className="text-yellow-600 font-medium">Среда, 18:00</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Благотворительность</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Помощь нуждающимся и социальные проекты общины
                </p>
                <div className="text-green-600 font-medium">Постоянно</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroSections;
