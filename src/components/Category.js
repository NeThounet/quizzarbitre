import React from 'react';
import PropTypes from 'prop-types';



function AnswerOption(props) {
    return (
        <div className="divCat">
            <input
                type="Checkbox"
                className=""
                name="radioGroup"
                value={props.category}
                checked={props.checked}
                id={props.id}
                onClick={props.onClick}
            />
            <label className="">
                {props.category}
            </label>
        </div>
    );
}

AnswerOption.propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default AnswerOption;
