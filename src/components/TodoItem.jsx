import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <div className="tasks">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span>{todo.text}</span>
    <button type="button" onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
