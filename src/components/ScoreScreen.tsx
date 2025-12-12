import React from 'react';

interface ScoreScreenProps {
  score: number;
  onRestart: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, onRestart }) => {
  // Style decision based on the design images (62% is blue, 0% is often emphasized in red)
  const scoreTextColor = score > 50 ? 'text-blue-700' : 'text-red-500';

  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <p className="text-md text-gray-600 mb-6">Keep Learning!</p>

      {/* Title */}
      <p className="font-serif text-2xl italic text-blue-900 mb-4">
        Your Final Score is
      </p>
      
      {/* Score Display: Large stylized font, exactly matching the image */}
      <div className="flex items-start mb-10">
        <span className={`font-serif text-[10rem] italic font-extrabold leading-none ${scoreTextColor}`}>
          {score}
        </span>
        <span className={`font-serif text-6xl italic font-extrabold ${scoreTextColor} mt-6`}>
          %
        </span>
      </div>

      {/* Start Again Button */}
      <button
        onClick={onRestart}
        className="px-8 py-3 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Start Again
      </button>
    </div>
  );
};

export default ScoreScreen;