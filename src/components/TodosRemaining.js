import React from 'react';
import PropTypes from 'prop-types';

const TodosRemaining = props => {
  return (
    <div>
      {props.remaining} items left
    </div>
  );
};

TodosRemaining.propTypes = {
  remaining: PropTypes.number.isRequired,
}

export default TodosRemaining;
