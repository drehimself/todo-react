import React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';

const TodosFiltered = props => {
  return (
    <div>
      <button
        onClick={() => props.updateFilter('all')}
        className={classnames({ 'active': props.filter === 'all' })}
      >
        All
      </button>

      <button
        onClick={() => props.updateFilter('active')}
        className={classnames({ 'active': props.filter === 'active' })}
      >
        Active
      </button>

      <button
        onClick={() => props.updateFilter('completed')}
        className={classnames({ 'active': props.filter === 'completed' })}
      >
        Completed
      </button>
    </div>
  );
};

TodosFiltered.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodosFiltered;
