
import React from 'react';
import BackToHomeButton from './BackToHomeButton';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button using our Back component style but as modal close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
          aria-label="Закрыть"
        >
          <span className="text-lg font-bold group-hover:rotate-90 transition-transform">×</span>
        </button>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Поддержать храм</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">♱</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ваша поддержка помогает нам продолжать духовное служение, 
              содержать храм и проводить благотворительные мероприятия.
            </p>
          </div>
          
          {/* Donation Options */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Способы пожертвования:</h3>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Банковский перевод</h4>
              <p className="text-sm text-gray-600 mb-2">
                Реквизиты для перевода будут предоставлены отдельно
              </p>
              <div className="text-xs text-gray-500">
                Самый надежный способ для крупных пожертвований
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Наличными</h4>
              <p className="text-sm text-gray-600 mb-2">
                Во время богослужений или при личном посещении храма
              </p>
              <div className="text-xs text-gray-500">
                Традиционный способ пожертвований
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-gray-800 mb-2">Контактная информация</h4>
            <p className="text-sm text-gray-600">
              Для получения реквизитов или вопросов о пожертвованиях 
              обращайтесь к настоятелю храма после богослужения.
            </p>
          </div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
