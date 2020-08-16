import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Result from './components/Result';
import Category from './components/Category';
import { Button, Popup } from 'semantic-ui-react'


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isQuestion: true,
      counter: 0,
      questionNumero: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: [],
      fail: [],
      categorylist: []
    };

    this.handleCatagoriesSelected = this.handleCatagoriesSelected.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.renderListOfWin = this.renderListOfWin.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
  }

  componentDidMount() {

    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    var category = this.getCategory();
    this.setState({
      question: quizQuestions[0].question,
      questionNumero: quizQuestions[0].numero,
      answerOptions: shuffledAnswerOptions[0],
      categorylist: category
    });
  }

  getCategory() {
    //var monTableau = quizQuestions.map(question => question.category);
    var monTableau = quizQuestions;
    // suppression des doublons
    var cache = {};
    monTableau = monTableau.filter(function (elem, index, array) {
      return cache[elem.category] ? 0 : cache[elem.category] = 1;
    });
    var tab = [];
    for (var i = 0; i < monTableau.length; i++) {
      tab.push({ category: monTableau[i].category, checked: 1 })
    }
    return tab.sort();
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
    //console.log(event.currentTarget.value);
    this.setUserAnswer(event.currentTarget.value);
    //setTimeout(() => this.setResults(this.getResults()), 300);
  }

  handleCatagoriesSelected(event) {
    var tab = this.state.categorylist;
    tab[event.currentTarget.id].checked = (tab[event.currentTarget.id].checked + 1) % 2;
    this.setState((state, props) => ({
      categorylist: tab
    }));
  }

  handleClickNext(event) {
    setTimeout(() => this.setNextQuestion(), 0);
    this.setState((state, props) => ({
      isQuestion: "true"
    }));
  }

  getGoodAnswer(answerOptions) {
    for (var i = 0; i < answerOptions.length; i++) {
      if (answerOptions[i].type === "Yes")
        return answerOptions[i].type;
    }
  }

  setUserAnswer(answer) {
    if (answer === this.getGoodAnswer(this.state.answerOptions)) {
      this.setState((state, props) => ({
        answer: answer,
        isQuestion: "false",
        result: [...this.state.result, this.state.questionNumero]
      }));
    } else {
      this.setState((state, props) => ({
        answer: answer,
        isQuestion: "false",
        fail: [...this.state.fail, this.state.questionNumero]
      }));
    }
  }

  setNextQuestion() {
    var tabchecked = this.state.categorylist.filter(line => line.checked === 0);
    var tab = [];
    for (var i = 0; i < tabchecked.length; i++) {
      tab[i] = tabchecked[i].category;
    }

    var arr = quizQuestions.filter(function (item) {
      return tab.indexOf(item.category) === -1;
    });

    const counter = Math.floor(Math.random() * arr.length);
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: arr[counter].question,
      answerOptions: arr[counter].answers,
      answer: '',
      questionNumero: arr[counter].numero,
    });
  }


  getResults() {
    return this.state.answerOptions[this.getGoodAnswer(this.state.answerOptions)].content;
  }

  setResults(getResults) {
    this.setState({ result: getResults });
  }

  renderListOfWin(key) {
    return (
      <p>{key}</p>
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

  renderCategory(key, index) {
    return (
      <ul className="Category">
        <Category
          category={key.category}
          id={index}
          checked={key.checked}
          onClick={this.handleCatagoriesSelected}
        /></ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Quizz arbitre district de la gironde, évalbox LFNA</h2>
        </div>
        <Popup flowing hoverable className="param" content={this.state.categorylist.map((x, index) => this.renderCategory(x, index))} trigger={<Button icon='add' />} />
        <div className="Package">
          <ul className="List">{this.state.result.map(this.renderListOfWin)}</ul>
          {this.renderResult()}
          <ul className="List">{this.state.fail.map(this.renderListOfWin)}</ul>
        </div>
      </div>
    );
  }
}

export default App;
