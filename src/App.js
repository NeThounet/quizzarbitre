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
      category: -1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      loiresult: [],
      result: ["N° des questions réussies"],
      fail: ["N° des questions ratées"],
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
    var initresult = this.initresult()
    this.setState({
      category: quizQuestions[0].category,
      question: quizQuestions[0].question,
      questionNumero: quizQuestions[0].numero,
      answerOptions: shuffledAnswerOptions[0],
      categorylist: category,
      loiresult: initresult
    });
  }

  initresult() {
    var mytab = [];
    for (var i = 0; i <= 17; i++) {
      mytab.push({ win: 0, lose: 0 });
    }
    return mytab;
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
    console.log(event.currentTarget.value);
    this.setUserAnswer(event.currentTarget);
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
    if (answer.id === this.getGoodAnswer(this.state.answerOptions)) {
      var tab = this.state.loiresult;
      console.log(answer);
      tab[answer.value].win = tab[answer.value].win + 1;
      tab[0].win = tab[0].win + 1;
      this.setState((state, props) => ({
        loiresult: tab,
        answer: answer.id,
        isQuestion: "false",
        result: [...this.state.result, this.state.questionNumero]
      }));
    } else {
      console.log(answer);
      tab = this.state.loiresult;
      tab[answer.value].lose = tab[answer.value].lose + 1;
      tab[0].lose = tab[0].lose + 1;
      this.setState((state, props) => ({
        loiresult: tab,
        answer: answer.id,
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
    console.log(arr);

    this.setState({
      counter: counter,
      category: arr[counter].category,
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

  renderListOfWin(key, index) {
    return (
      <div className={index % 4 !== 3 ? (index >= 4 ? "BorderRight BoxC BorderTop" : "BoxC BorderRight") : (index >= 4 ? "BoxC BorderTop  " : "BoxC ")}>
        <h4 className="NumLoi">{index === 0 ? "Total" : "Loi " + index}</h4>
        <div className="BoxL">
          <span role="img" className="ListItem Border emojiV">0</span>
          <span role="img" className="ListItem emojiX">0</span>
        </div>
        <div className="BoxL">
          <label className="ListItem Border Yes">{key.win}</label>
          <label className="ListItem No">{key.lose}</label>
        </div>
      </div>
    );
  }

  renderResult() {
    return <Result isQuestion={this.state.isQuestion}
      answer={this.state.answer}
      questionNumero={this.state.questionNumero}
      answerOptions={this.state.answerOptions}
      category={this.state.category}
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
          category={"Loi " + key.category}
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
        <Popup flowing hoverable className="CatPopup" content={this.state.categorylist.map((x, index) => this.renderCategory(x, index))} trigger={<Button icon='add' className="CatPopup" />} />
        <div className="Package">
          {this.renderResult()}
          <div className="List">{this.state.loiresult.map((x, index) => this.renderListOfWin(x, index))}</div>
        </div>
      </div>
    );
  }
}

export default App;
