import React, { useContext } from 'react';
import { QuizContext } from '../Context/QuizHolder';

export default function Start() {
    const { setStart } = useContext(QuizContext);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-100">
            <h1 className="text-6xl font-bold mb-8">Welcome to the Quiz!</h1>
            <p className="text-2xl mb-8">Test your knowledge and challenge yourself with our quiz.</p>
            <button
                onClick={() => setStart(true)}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-md'
            >
                Start Quiz
            </button>
        </div>
    );
}
