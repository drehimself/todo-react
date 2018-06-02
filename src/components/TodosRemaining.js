import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const TodosRemaining = inject('TodoStore')(observer(props => {
  return (
    <div>
      {props.TodoStore.remaining} items left
    </div>
  );
}));

TodosRemaining.wrappedComponent.propTypes = {
  TodoStore: PropTypes.object.isRequired,
}

export default TodosRemaining;
