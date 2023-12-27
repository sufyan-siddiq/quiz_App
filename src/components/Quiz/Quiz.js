import React, { useState } from 'react'
import "./style.css"
import { QuizData } from '../../QuizData/QuizData';
export const Quiz = () => {
    const [option, setOption] = useState()
    const [score, setScore] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)
    const [btn, setBtn] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const choiceOption = (i) => {
        setOption(i)
    }
    const reStart = () => {
        setCurrentQuestion(0)
        setWrongAnswers(0)
        setScore(0)
    }
    const changeQuestion = () => {
        updateScore()
        if (currentQuestion === 4) {
            setBtn(true)
            // setCurrentQuestion(0)
            // setScore(0)
            // setWrongAnswers(0)
        }
        else {
            setCurrentQuestion(currentQuestion + 1)
            console.log("item", option);
        }
    }
    const updateScore = () => {
        if (option == QuizData[currentQuestion].answer) {
            setScore(score + 1)
        }
        else {
            setWrongAnswers(wrongAnswers + 1)
        }
    }
    return (
        <>
            <div className="quiz-form" >
                <h1>Quiz App</h1>
                <div className="scored">
                    <div className="scored-message">
                        You scored {score} /5
                    </div>
                    <button className="scored-button" onClick={reStart}>Try Again?</button>
                </div>
                <div className="W-message">
                    Wrong Answer {wrongAnswers}
                </div>
                <div className="quiz1">
                    <div className="question">
                        {currentQuestion + 1}
                    </div>

                    <div className="question">
                        {QuizData[currentQuestion].question}
                    </div>
                    {QuizData[currentQuestion].options.map((i, index) => (
                        <div key={index} className="options">
                            <button onClick={() => choiceOption(index + 1)} className={option == index + 1 ? "active-button" : "submit-button"}
                                type="radio" name="answer" id="option1" >{i}</button>
                        </div>
                    ))}
                </div>
            </div>
            {btn ?
                <div className="submit1">
                    <button className="submit-button2" onClick={reStart} >Re-Start</button>
                </div>
                :
                <div className="submit1">
                    <button className="submit-button2" onClick={changeQuestion}> {currentQuestion == 0 ? "Start Quiz" : "Next"}</button>
                </div>
            }
        </>
    )
}