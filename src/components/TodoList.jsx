import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={text}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
