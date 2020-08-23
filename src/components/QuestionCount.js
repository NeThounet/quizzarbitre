import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';


function QuestionCount(props) {
  return (
    <div className="questionCount">
      <span>{props.counter}</span>
      {props.type === "Ouverte" && <Popup content="Question ouverte, à vous d'écrire la réponse. Vous vous autocorrigerez en cliquant sur le bouton V si vous êtes satisfait de votre réponse, sur le X sinon" trigger={<Icon name='info circle' />} />}
    </div>
  );
}

QuestionCount.propTypes = {
  type: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};

export default QuestionCount;
