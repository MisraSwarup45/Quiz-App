import React, { useContext } from 'react';
import { QuizContext } from '../Context/QuizHolder';

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext);

    const playAgain = () => {
        setExit(false);
        setStart(false);
    };

    return (
        <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-purple-500 via-pink-500 to-red-500'>
            <div className='w-[50%] border shadow-lg rounded-md overflow-hidden text-center bg-white p-8'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>
                    Quiz Results
                </h1>
                <h2 className='text-2xl mb-4 text-gray-900'>
                    You got {correct} out of {quizzes.length} questions correct!
                </h2>
                <p className='text-lg mb-8 text-gray-900'>
                    Congratulations on finishing the quiz. You did a great job!
                </p>
                <button onClick={playAgain} className='bg-purple-600 text-white py-3 px-6 text-lg font-semibold rounded hover:bg-purple-700 transition-colors duration-200'>
                    Play Again
                </button>
            </div>
        </div>
    );
}
