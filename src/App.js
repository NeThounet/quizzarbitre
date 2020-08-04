import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isQuestion: "true",
      counter: 0,
      questionNumero: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      questionNumero: quizQuestions[0].numero,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    //setTimeout(() => this.setResults(this.getResults()), 300);
  }

  handleClickNext(event) {
    setTimeout(() => this.setNextQuestion(), 300);
    this.setState((state, props) => ({
      isQuestion: "true"
    }));
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answer: answer,
      isQuestion: "false"
    }));
  }

  setNextQuestion() {
    const counter = Math.floor(Math.random() * quizQuestions.length);
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
      questionNumero: quizQuestions[counter].numero,
    });
  }
  getGoodAnswer(answerOptions) {
    for (var i = 0; i < answerOptions.length; i++) {
      if (answerOptions[i].type === "Yes")
        return i;
    }
  }
  /*getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }*/

  getResults() {
    console.log(this.state.answerOptions);
    console.log(this.getGoodAnswer(this.state.answerOptions));
    return this.state.answerOptions[this.getGoodAnswer(this.state.answerOptions)].content;
  }

  setResults(getResults) {
    this.setState({ result: getResults });
    /*if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }*/
  }

  renderQuiz() {
    return (
      <Quiz
        isQuestion={this.state.isQuestion}
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result isQuestion={this.state.isQuestion}
      answer={this.state.answer}
      questionNumero={this.state.questionNumero}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
      onHandleClickNext={this.handleClickNext}
    />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Quizz arbitre district de la gironde, évalbox LFNA</h2>
        </div>
        {this.renderResult()}
      </div>
    );
  }
}

export default App;
