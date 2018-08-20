import React, { Component } from 'react';
import { firebase, firestore } from './firebase';
import Answers from './Answers';
import data from './data';
import './styles/Quiz.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.location.state.userId,
      question: 0,
      score: 0,
      isCorrect: false,
      isAnswered: false,
      // zoom: 17
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillUnmount() {
    console.log(this.state.score);
    firestore
      .collection('scores')
      .add({
        score: this.state.score,
        user: this.state.userId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .catch(error => {
        console.log(error);
      });
  }

  checkAnswer(answer) {
    if (!this.state.isAnswered) {
      if (answer === data[this.state.question].correct) {
        this.setState({
          score: this.state.score + 1,
          isCorrect: true,
          isAnswered: true,
          zoom: 4
        });
      } else {
        this.setState({
          isCorrect: false,
          isAnswered: true,
          zoom: 4
        });
      }
    }
  }

  nextQuestion() {
    this.setState({
      isAnswered: false,
      question: this.state.question + 1,
      zoom: 14
    });
  }

  render() {
    return (
      <div>
        <div className="topBar">
          <p>{this.state.question + 1}. What country is this?</p>
        </div>
        <Answers
          isAnswered={this.state.isAnswered}
          question={this.state.question}
          score={this.state.score}
          nextQuestion={this.nextQuestion}
          isCorrect={this.state.isCorrect}
          checkAnswer={this.checkAnswer}
        />
        
      </div>
    );
  }
}
export default Quiz;
