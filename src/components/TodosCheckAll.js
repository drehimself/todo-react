import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';


const TodosCheckAll = inject('TodoStore')(observer(props => {
  return (
    <div>
      <label><input type="checkbox" checked={!props.TodoStore.anyRemaining} onChange={props.TodoStore.checkAllTodos} /> Check All</label>
    </div>
  );
}));

TodosCheckAll.wrappedComponent.propTypes = {
  TodoStore: PropTypes.object.isRequired,
};

export default TodosCheckAll;
