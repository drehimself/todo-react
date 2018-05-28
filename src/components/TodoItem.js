import React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';


const TodoItem = props => {
  return (
    <div>
      <div key={props.todo.id} className="todo-item">
        <div className="todo-item-left">
          <input type="checkbox" onChange={(event) => props.checkTodo(props.todo, props.index, event)} checked={props.todo.completed} />

          {!props.todo.editing &&
          <div
            className={classnames({'todo-item-label': true, 'completed': props.todo.completed})}
            onDoubleClick={(event) => props.editTodo(props.todo, props.index, event)}
          >
            {props.todo.title}
          </div>
          }

          {props.todo.editing &&
          <input
            className="todo-item-edit" type="text" autoFocus
            defaultValue={props.todo.title}
            onBlur={(event) => props.doneEdit(props.todo, props.index, event)}
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                props.doneEdit(props.todo, props.index, event);
              } else if (event.key === 'Escape') {
                props.cancelEdit(props.todo, props.index, event);
              }
            }}
          />
          }

        </div>
        <div className="remove-item" onClick={(event) => props.deleteTodo(props.index)}>
          &times;
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  checkTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  doneEdit: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
