
import React, { useState, useEffect } from 'react';
import { Calendar } from '../components/ui/calendar';
import { Church, ArrowDown } from 'lucide-react';

interface OrthodoxEvent {
  date: Date;
  name: string;
  type: 'major' | 'minor' | 'fast' | 'service';
}

const Services = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [orthodoxEvents, setOrthodoxEvents] = useState<OrthodoxEvent[]>([]);

  useEffect(() => {
    // Создаем православный календарь с основными праздниками
    const currentYear = new Date().getFullYear();
    const events: OrthodoxEvent[] = [
      // Рождество Христово (7 января)
      { date: new Date(currentYear, 0, 7), name: 'Рождество Христово', type: 'major' },
      { date: new Date(currentYear + 1, 0, 7), name: 'Рождество Христово', type: 'major' },
      
      // Крещение Господне (19 января)
      { date: new Date(currentYear, 0, 19), name: 'Крещение Господне', type: 'major' },
      { date: new Date(currentYear + 1, 0, 19), name: 'Крещение Господне', type: 'major' },
      
      // Пасха (переходящий праздник - примерно)
      { date: new Date(currentYear, 3, 16), name: 'Светлое Христово Воскресение (Пасха)', type: 'major' },
      { date: new Date(currentYear, 4, 5), name: 'Светлое Христово Воскресение (Пасха)', type: 'major' },
      
      // Вознесение Господне (через 39 дней после Пасхи)
      { date: new Date(currentYear, 4, 25), name: 'Вознесение Господне', type: 'major' },
      
      // Троица (через 49 дней после Пасхи)
      { date: new Date(currentYear, 5, 4), name: 'День Святой Троицы', type: 'major' },
      
      // Преображение Господне (19 августа)
      { date: new Date(currentYear, 7, 19), name: 'Преображение Господне', type: 'major' },
      
      // Успение Богородицы (28 августа)
      { date: new Date(currentYear, 7, 28), name: 'Успение Пресвятой Богородицы', type: 'major' },
      
      // Рождество Богородицы (21 сентября)
      { date: new Date(currentYear, 8, 21), name: 'Рождество Пресвятой Богородицы', type: 'major' },
      
      // Покров (14 октября)
      { date: new Date(currentYear, 9, 14), name: 'Покров Пресвятой Богородицы', type: 'major' },
      
      // Введение во храм (4 декабря)
      { date: new Date(currentYear, 11, 4), name: 'Введение во храм Пресвятой Богородицы', type: 'major' },
      
      // Николай Чудотворец (19 декабря и 22 мая)
      { date: new Date(currentYear, 11, 19), name: 'Святитель Николай Чудотворец', type: 'major' },
      { date: new Date(currentYear, 4, 22), name: 'Святитель Николай Чудотворец (перенесение мощей)', type: 'major' },
      
      // Регулярные службы по воскресеньям
      ...generateSundayServices(currentYear),
    ];
    
    setOrthodoxEvents(events);
  }, []);

  const generateSundayServices = (year: number): OrthodoxEvent[] => {
    const services: OrthodoxEvent[] = [];
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getDay() === 0) { // Воскресенье
        services.push({
          date: new Date(d),
          name: 'Божественная литургия',
          type: 'service'
        });
      }
    }
    
    return services;
  };

  const getEventsForDate = (date: Date) => {
    return orthodoxEvents.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const isHoliday = (date: Date) => {
    return orthodoxEvents.some(event => 
      event.date.toDateString() === date.toDateString() && 
      (event.type === 'major' || event.type === 'minor')
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
              Расписание служб
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Богослужения и православный календарь храма Святого Николая
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-yellow-400" />
        </div>
      </section>

      {/* Services Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Регулярные богослужения
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">☦</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Воскресная служба</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Божественная литургия совершается каждое воскресенье
                </p>
                <div className="text-blue-600 font-medium">Воскресенье, 9:00</div>
                <div className="text-sm text-gray-500 mt-1">Исповедь с 8:30</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 text-xl">📖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Вечерняя служба</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Вечернее богослужение в субботу
                </p>
                <div className="text-yellow-600 font-medium">Суббота, 17:00</div>
                <div className="text-sm text-gray-500 mt-1">Всенощное бдение</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">🕯️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Молебны</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Специальные молебны по требованию
                </p>
                <div className="text-green-600 font-medium">По договоренности</div>
                <div className="text-sm text-gray-500 mt-1">Крестины, венчания, отпевания</div>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Православный календарь</h3>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    className="w-full"
                    modifiers={{
                      holiday: (date) => isHoliday(date)
                    }}
                    modifiersStyles={{
                      holiday: {
                        backgroundColor: '#fef3c7',
                        color: '#d97706',
                        fontWeight: 'bold'
                      }
                    }}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  События на {selectedDate.toLocaleDateString('ru-RU')}
                </h3>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  {getEventsForDate(selectedDate).length > 0 ? (
                    <div className="space-y-4">
                      {getEventsForDate(selectedDate).map((event, index) => (
                        <div key={index} className={`p-4 rounded-lg border-l-4 ${
                          event.type === 'major' ? 'border-red-500 bg-red-50' :
                          event.type === 'minor' ? 'border-yellow-500 bg-yellow-50' :
                          event.type === 'service' ? 'border-blue-500 bg-blue-50' :
                          'border-gray-500 bg-gray-50'
                        }`}>
                          <div className={`font-semibold ${
                            event.type === 'major' ? 'text-red-700' :
                            event.type === 'minor' ? 'text-yellow-700' :
                            event.type === 'service' ? 'text-blue-700' :
                            'text-gray-700'
                          }`}>
                            {event.name}
                          </div>
                          {event.type === 'service' && (
                            <div className="text-sm text-gray-600 mt-1">9:00 - Божественная литургия</div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      На выбранную дату нет особых событий
                    </p>
                  )}
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Контакты</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Настоятель: иерей Алексей Шишко
                  </p>
                  <p className="text-sm text-gray-600">
                    Для уточнения расписания и треб обращайтесь после богослужения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
