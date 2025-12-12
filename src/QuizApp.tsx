import React, { useState, useMemo } from 'react';
// Note: Ensure this path is correct based on your final src/ structure
import { quizQuestions } from './data/quizQuestions'; 
import QuestionCard from './components/QuestionCard';
import ScoreScreen from './components/ScoreScreen';

// Type definition for the overall component structure (optional but recommended)
const QuizApp: React.FC = () => {
  // --- 1. STATE MANAGEMENT ---
  
  // Tracks which question the user is currently viewing (0-indexed)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  
  // Stores selected answers: {questionId: selectedAnswerString}
  // This allows the user to navigate back and forth without losing choices
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  
  // Boolean flag to switch from the quiz view to the score view
  const [showScore, setShowScore] = useState(false); 

  // --- 2. DERIVED VALUES & CONSTANTS ---
  
  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  
  // Calculate score efficiency using useMemo so it only recalculates when answers change
  const calculateScore = useMemo(() => {
    let correctCount = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    // Calculate percentage, rounding to the nearest whole number
    return Math.round((correctCount / totalQuestions) * 100);
  }, [userAnswers, totalQuestions]);


  // --- 3. HANDLER FUNCTIONS (Logic) ---

  const handleSelectAnswer = (answer: string) => {
    // Save the selected answer to the state object
    if (!showScore) {
      setUserAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: answer
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      // Go to next question
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentQuestionIndex === totalQuestions - 1) {
      // If it's the last question, show the results
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    // Reset all states to start the quiz from the beginning
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowScore(false);
  };

  // --- 4. STYLING & RENDERING (The View) ---

  // Main Background (light blue fade)
  const containerClasses = "bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen flex items-center justify-center p-4 font-sans";
  
  // Quiz Card styling (White background, large radius, subtle shadow/border)
  const cardClasses = "bg-white rounded-4xl shadow-2xl p-6 sm:p-10 max-w-2xl w-full border border-blue-100 relative";
  
  // Main Title styling (Stylized font, dark teal color)
  const titleClasses = "font-serif text-3xl sm:text-4xl italic text-blue-900 text-center mb-1";

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        <h1 className={titleClasses}>
          Test Your Knowledge
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Answer all questions to see your results
        </p>

        {/* Conditional Rendering: Show Quiz or Show Score */}
        {!showScore ? (
          <QuestionCard
            question={currentQuestion}
            totalQuestions={totalQuestions}
            currentQuestionIndex={currentQuestionIndex}
            selectedAnswer={userAnswers[currentQuestion.id]}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNext}
          />
        ) : (
          <ScoreScreen 
            score={calculateScore} 
            onRestart={handleRestart} 
          />
        )}
      </div>
    </div>
  );
};

export default QuizApp;