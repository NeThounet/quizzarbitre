import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import AnswerOption from '../components/AnswerOption';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';



//<ul className={key.type = props.answer ? "answerOptions + No" : "answerOptions"}>
function Result(props) {
  function renderAnswerOptions(key) {
    return (
      <ul className="answerOptions">
        <AnswerOption
          isQuestion={props.isQuestion}
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={props.answer}
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
        /></ul>
    );
  }

  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <QuestionCount counter={props.questionNumero} />
        <Question content={props.question} />
        {props.answerOptions.map(renderAnswerOptions)}
        {props.isQuestion === "false" && <button name="button" onClick={props.onHandleClickNext}>Question suivante</button>}
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  isQuestion: PropTypes.string.isRequired,
  questionNumero: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onHandleClickNext: PropTypes.func.isRequired
};

export default Result;
