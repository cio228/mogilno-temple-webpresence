
import React from 'react';
import { Link } from 'react-router-dom';
import { Church, ArrowDown } from 'lucide-react';

const About = () => {
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
              О нашем храме
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              История веры, традиций и возрождения духовности в агрогородке Могильно
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-yellow-400" />
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Там лес и дол
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Здешний пейзаж будто сошел с холста художника. На краю лужайки щиплют травку лошади, 
                  недалеко пасутся коровы, а вокруг разливается Неман цвета безоблачного неба. Стоит оглянуться — 
                  найдешь и яркие краски: как же красиво цветет яблоня, как нежна молодая сирень!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Тихая пастораль, такая недостижимая для жителей мегаполисов. Идеальное место для тех, 
                  кто ищет уединения и внутреннего покоя. Идеальное место для храма.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">История места</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Путь больше часа на машине — и городская суета исчезает, будто не было ее вовсе. 
                Вот она, чудесная особенность агрогородка Могильно, что в Узденском районе. 
                Пусть название вас не пугает, торжество жизни здесь чувствуется как никогда прежде.
              </p>
              
              <div className="bg-white border-l-4 border-yellow-500 pl-6 py-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Впервые в письменных источниках Могильно упоминается в 1284 году как место жестокой битвы 
                  между литовским князем Рингольдом и объединенными войсками южнорусских князей и татар.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Какое-то время городок принадлежал Радзивиллам, здесь было три улицы, православная церковь, 
                корчма, рынок и 56 дворов. В XVII веке местечко разрушили, но спустя годы вновь возродили.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Традиции веры</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Интересно еще и вот что: несмотря на лихолетья, верующим практически всегда было где помолиться — 
                большой приход в честь святителя Николая Чудотворца притягивал людей из деревень поблизости. 
                Однако в 1936-м случилась трагедия: церковь уничтожили, утварь разграбили, а колокола, 
                по преданию, утопили в Немане.
              </p>

              <blockquote className="bg-gray-100 border-l-4 border-blue-500 pl-6 py-4 italic text-gray-800 mb-8">
                "Это был пятикупольный храм с двумя алтарями, серебряными сосудами, вышитой золотом плащаницей"
                <footer className="text-sm text-gray-600 mt-2">— настоятель прихода иерей Алексей Шишко</footer>
              </blockquote>

              <p className="text-gray-700 leading-relaxed mb-8">
                Приходская жизнь остановилась, хотя во время Великой Отечественной войны существовала 
                маленькая община, а батюшки служили в часовне неподалеку.
              </p>

              <div className="text-center">
                <Link 
                  to="/construction" 
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Узнать о строительстве нового храма
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
