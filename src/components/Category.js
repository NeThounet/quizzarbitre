import React from 'react';
import PropTypes from 'prop-types';



function Category(props) {
    return (
        <div className={props.id !== 0 ? "divCat" : ""}>
            <input
                type="Checkbox"
                className={props.id}
                name="radioGroup"
                value={props.category}
                checked={props.checked}
                id={props.id}
                onClick={props.onClick}
            />
            <label className="catLabel">
                {props.category}
            </label>
        </div>
    );
}

Category.propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Category;
