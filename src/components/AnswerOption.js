import React from 'react';
import PropTypes from 'prop-types';



function AnswerOption(props) {
  return (
    <li className={props.isQuestion === "false" ? (props.answerType === props.answer ? (props.answerType !== "Yes" ? "answerOption + No" : "answerOption Yes") : (props.answerType === "Yes" ? "answerOption + Yes" : "answerOption")) : "answerOption"}>
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.category}
        category={props.category}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );

}

AnswerOption.propTypes = {
  type: PropTypes.string.isRequired,
  isQuestion: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
