import React from 'react';
// FIX: Corrected the path to access quizQuestions.ts inside the data folder
import { Question } from '../data/quizQuestions'; 

interface QuestionCardProps {
  question: Question;
  totalQuestions: number;
  currentQuestionIndex: number;
  selectedAnswer: string | undefined;
  onSelectAnswer: (answer: string) => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  totalQuestions,
  currentQuestionIndex,
  selectedAnswer,
  onSelectAnswer,
  onNext,
}) => {
  const currentStep = currentQuestionIndex + 1;
  const isLastQuestion = currentStep === totalQuestions;
  
  // Progress bar width calculation
  const progressWidth = `${(currentStep / totalQuestions) * 100}%`;
  const isButtonEnabled = selectedAnswer !== undefined;

  return (
    <>
      {/* Progress Indicators (Matching the horizontal bars in the design) */}
      <div className="flex justify-between items-center mb-8">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
      
      {/* Question Text Block (matching light blue background) */}
      <div className="bg-blue-100/50 rounded-lg p-4 mb-8">
          <p className="text-xl font-semibold text-blue-900">
            {currentStep}. {question.question}
          </p>
      </div>


      {/* Options/Answer Buttons */}
      <div className="space-y-4">
        {/* FIX: Explicitly defined 'option' as string to resolve TS7006 error */}
        {question.options.map((option: string) => ( 
          <button
            key={option}
            onClick={() => onSelectAnswer(option)}
            // Conditional Styling: Highlight selected answer
            className={`
              w-full text-left transition-all duration-200 rounded-lg p-4 font-medium text-lg focus:outline-none focus:ring-4 focus:ring-blue-300
              ${selectedAnswer === option 
                ? 'border-2 border-blue-500 bg-blue-200 text-blue-900 shadow-md' 
                : 'border border-gray-200 bg-blue-50 hover:bg-blue-100 text-gray-800'
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation (Matching the arrows/buttons in the design) */}
      <div className="flex justify-between items-center mt-8">
        {/* 'Best of Luck!' text from the first image (optional) */}
        {currentStep === 1 && (
             <div className="text-sm font-semibold text-blue-700 p-2 rounded-full border border-blue-300 bg-white shadow-lg">
                Best of Luck!
             </div>
        )}
        
        <div className="flex space-x-2 ml-auto">
           {/* Previous Arrow Button (Disabled if on first question) */}
           <button 
             disabled={currentStep <= 1}
             // NOTE: Adding back functionality requires updating handleNext/handlePrev logic in QuizApp.tsx
             className="w-10 h-10 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-50 transition"
           >
             ←
           </button>
        
           {/* Next/Submit Button */}
           <button
             onClick={onNext}
             disabled={!isButtonEnabled}
             className={`
               px-6 py-3 rounded-lg text-white font-bold text-lg transition-colors shadow-md
               ${isButtonEnabled
                 ? 'bg-blue-600 hover:bg-blue-700'
                 : 'bg-gray-400 cursor-not-allowed'
               }
             `}
           >
             {isLastQuestion ? 'Submit' : '→'}
           </button>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;