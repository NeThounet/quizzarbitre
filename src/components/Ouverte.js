import React from 'react';
import PropTypes from 'prop-types';
import { TextArea, Form } from 'semantic-ui-react'



function Ouverte(props) {
    if (props.isQuestion === "true") {
        return (
            <Form className='textOuvert'><TextArea className='textOuvert' placeholder='Entrez votre réponse la plus complète possible' />
            </Form>
        );
    } else {
        return (<p className="reponseOuvert">
            {props.answerContent}
        </p>)
    }
}

Ouverte.propTypes = {
    isQuestion: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Ouverte;