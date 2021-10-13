import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';

export default function Completed({ todos, setTodos }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    getTodos(true).then((todoArray) => {
      setCompletedTodos(todoArray);
    });
  }, [todos]);

  return (
    <div>
      {completedTodos.map((todo) => (
        <Todo key={todo.firebaseKey} taco={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}

Completed.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
};
