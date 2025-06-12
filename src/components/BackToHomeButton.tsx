
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

interface BackToHomeButtonProps {
  variant?: 'arrow' | 'cross';
  position?: 'top-left' | 'top-right';
}

const BackToHomeButton: React.FC<BackToHomeButtonProps> = ({ 
  variant = 'arrow', 
  position = 'top-left' 
}) => {
  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6'
  };

  return (
    <Link 
      to="/"
      className={`fixed ${positionClasses[position]} z-50 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 group`}
      aria-label="Вернуться на главную"
    >
      {variant === 'arrow' ? (
        <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
      ) : (
        <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
      )}
      
      {/* Tooltip */}
      <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        На главную
      </div>
    </Link>
  );
};

export default BackToHomeButton;
