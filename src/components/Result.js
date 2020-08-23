import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import AnswerOption from '../components/AnswerOption';
import Ouverte from '../components/Ouverte';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import { Button, Icon, Image } from 'semantic-ui-react';



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
          category={props.category}
          onAnswerSelected={props.onAnswerSelected}
          type={props.type}
        /></ul>
    );
  }

  return (
    <div className="quizzSection">
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
          <QuestionCount counter={props.questionNumero} type={props.type} />
          <Question content={props.question} />
          {props.type !== "Ouverte" && props.answerOptions.map(renderAnswerOptions)}
          {props.type === "Ouverte" && <Ouverte answerContent={props.answerOptions[0].content} isQuestion={props.isQuestion} />}
        </div>
      </CSSTransitionGroup>
      <div className="DivButton">
        {props.isQuestion === "false" && props.type !== "Ouverte" && <Button className="NextButton" onClick={props.onHandleClickNext} animated>
          <Button.Content visible>Question suivante</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>}
        {props.isQuestion === "true" && props.type === "Ouverte" && <Button className="NextButton" onClick={props.handleCorrection} animated>
          <Button.Content visible>Correction</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>}
        {props.isQuestion === "false" && props.type === "Ouverte" && <Button id="Yes" value={props.category} className="ButtonOuvert" onClick={props.handleAutoCorrection} animated>
          <Button.Content className="buttonCorrection" visible> <Image src='./V.png' fluid className='imgButton' /></Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>}
        {props.isQuestion === "false" && props.type === "Ouverte" && <Button id="No" value={props.category} className="ButtonOuvert" onClick={props.handleAutoCorrection} animated>
          <Button.Content className="buttonCorrection" visible><Image src='./X.png' fluid className='imgButton' /></Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>}
      </div>
    </div>
  );
}

Result.propTypes = {
  type: PropTypes.string.isRequired,
  isQuestion: PropTypes.string.isRequired,
  questionNumero: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onHandleClickNext: PropTypes.func.isRequired,
  handleCorrection: PropTypes.func.isRequired,
  handleAutoCorrection: PropTypes.func.isRequired
};

export default Result;
