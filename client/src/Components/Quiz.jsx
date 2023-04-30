import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    )
}


const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");

    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
    }

    return (
        <div className="w-[60%] mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold mb-8">{current + 1}) {quizzes[current].question}</div>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className={`py-4 px-6 border rounded-lg text-lg font-medium text-center transition-colors duration-200 ${ans === "a" ? 'bg-blue-400 text-white' : 'bg-gray-100 hover:bg-blue-400 hover:text-white'}`} onClick={() => setAns("a")}>{quizzes[current].a}</div>
                <div className={`py-4 px-6 border rounded-lg text-lg font-medium text-center transition-colors duration-200 ${ans === "b" ? 'bg-blue-400 text-white' : 'bg-gray-100 hover:bg-blue-400 hover:text-white'}`} onClick={() => setAns("b")}>{quizzes[current].b}</div>
                <div className={`py-4 px-6 border rounded-lg text-lg font-medium text-center transition-colors duration-200 ${ans === "c" ? 'bg-blue-400 text-white' : 'bg-gray-100 hover:bg-blue-400 hover:text-white'}`} onClick={() => setAns("c")}>{quizzes[current].c}</div>
                <div className={`py-4 px-6 border rounded-lg text-lg font-medium text-center transition-colors duration-200 ${ans === "d" ? 'bg-blue-400 text-white' : 'bg-gray-100 hover:bg-blue-400 hover:text-white'}`} onClick={() => setAns("d")}>{quizzes[current].d}</div>
            </div>
            <div className="flex justify-between">
                <div className="cursor-pointer h-[40px] px-6 bg-orange-500 text-white font-medium rounded-lg flex items-center justify-center transition-colors duration-200" onClick={() => setAns("")}>Reset</div>
                <div className="cursor-pointer h-[40px] px-6 bg-green-500 text-white font-medium rounded-lg flex items-center justify-center transition-colors duration-200" onClick={saveHandler}>Save &amp; Next</div>
                <div className="cursor-pointer h-[40px] px-6 bg-red-500 text-white font-medium rounded-lg flex items-center justify-center transition-colors duration-200" onClick={() => setExit(true)}>Exit</div>
            </div>
        </div>
    )
}
