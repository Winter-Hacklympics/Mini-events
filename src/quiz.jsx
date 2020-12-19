import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import person from './images/Person.svg'
import { Typography, Button, CardContent } from '@material-ui/core';
import celeb from './images/Celebration.svg';
import lost from './images/Lost.svg';
import pic2 from './images/undraw_Winter_olympics_p07j (1).svg';

export default function App() {
	const questions = [
		{
			questionText: 'When was the first Winter Olympics?',
			answerOptions: [
				{ answerText: '1945', isCorrect: false },
				{ answerText: '1896', isCorrect: false },
				{ answerText: '1924', isCorrect: true },
				{ answerText: '1936', isCorrect: false },
			],
		},
		{
			questionText: 'How many events are there in the Winter Olympics?',
			answerOptions: [
				{ answerText: '105', isCorrect: false },
				{ answerText: '102', isCorrect: true },
				{ answerText: '100', isCorrect: false },
				{ answerText: '104', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the only country to have won at least one gold medal in every Winter Olympics?',
			answerOptions: [
				{ answerText: 'USA', isCorrect: true },
				{ answerText: 'Russia', isCorrect: false },
				{ answerText: 'Norway', isCorrect: false },
				{ answerText: 'Britain', isCorrect: false },
			],
		},
		{
			questionText: 'No country in the southern hemisphere has ever even applied to host the Winter Olympics.',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
		<img src={person} alt="Person" className="person"/>
    	{showScore ? (
        score>2?(<Card className="quizCard" style={{backgroundImage: "radial-gradient(rgb(255,255,255), #2ecc71)"}}>
        <CardContent >
        <br></br>
        <br></br>
        <div className='score-section'>
          <h2>You scored {score} out of {questions.length}!</h2>
          <img className="celeb" src={celeb} alt="Celebration"/>
        </div>
        </CardContent>
        </Card>):
        <Card className="quizCard" style={{backgroundImage: "radial-gradient(rgb(255,255,255), #e74c3c)"}}>
          <CardContent >
          <br></br>
          <br></br>
          <div className='score-section'>
            <h2>You scored {score} out of {questions.length} :(</h2>
            <img className="celeb" src={lost} alt="Better Luck Next time"/>
          </div>
          </CardContent>
        </Card>
			) : (
				<>
          <Card className="quizCard" style={{backgroundImage: "radial-gradient(rgb(255,255,255), #FFC312)"}}>
          <br></br>
					<div className='question-section'>
						<div className='question-count'>
              <Typography><span><i>Question {currentQuestion + 1}/{questions.length}</i></span></Typography>
						</div>
						<div className='question-text'><b>{questions[currentQuestion].questionText}</b></div>
            <br></br>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<div className="option">
                <Button variant="contained" color="primary" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                <br/>
                <br/>
              </div>
						))}
					</div>
          </Card>
				</>
			)}
    <img src={pic2} alt="olympics" className="olympics"/>
		</div>
	);
}