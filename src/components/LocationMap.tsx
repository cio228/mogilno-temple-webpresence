
import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Как нас найти
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Храм Святого Николая
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Адрес</h4>
                  <p className="text-gray-600">
                    Республика Беларусь<br/>
                    Минская область<br/>
                    Узденский район<br/>
                    агрогородок Могильно
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Как добраться</h4>
                  <p className="text-gray-600 mb-2">
                    🚗 На автомобиле: примерно 1 час от Минска
                  </p>
                  <p className="text-gray-600">
                    🚌 Общественным транспортом: автобус до Узды, далее местный транспорт
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Особенности места</h4>
                  <p className="text-gray-600">
                    Тихое место на берегу Немана, окруженное живописной природой. 
                    Идеальное место для духовного уединения и молитвы.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg p-8 text-center shadow-lg">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl">⛪</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">Храм в природе</h4>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  "Здешний пейзаж будто сошел с холста художника. На краю лужайки щиплют травку лошади, 
                  недалеко пасутся коровы, а вокруг разливается Неман цвета безоблачного неба."
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-semibold text-gray-800">🌊 Неман</div>
                    <div>Живописная река</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-semibold text-gray-800">🌳 Природа</div>
                    <div>Леса и луга</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-semibold text-gray-800">🏡 Деревня</div>
                    <div>Тихая атмосфера</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-semibold text-gray-800">✨ Покой</div>
                    <div>Духовное место</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Интерактивная карта будет добавлена в ближайшее время
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
