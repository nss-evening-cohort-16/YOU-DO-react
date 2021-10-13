import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

const Container = styled.div`
  width: 60%;
  margin: auto;
  padding: 50px 0;

  h1 {
    color: white;
    text-align: center;
    font-size: 64px;
    font-weight: 400;
  }

  h3 {
    color: lightgrey;
    text-align: center;
  }
  h4 {
    color: lightgrey;
    text-transform: uppercase;
    font-size: medium;
  }
`;

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const categoryGroups = () => {
    const obj = {};
    todos.forEach((todo) => {
      // LOOKING to see if a key of item exists
      if (todo.category in obj) {
        obj[todo.category] = [...obj[todo.category], todo];
      } else {
        obj[todo.category] = [todo];
      }
    });

    return Object.keys(obj).map((cat) => (
      <div key={cat}>
        <h4>Category {cat}</h4>
        {obj[cat].map((todo) => (
          <Todo
            key={todo.firebaseKey}
            taco={todo}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
        ))}
      </div>
    ));
  };

  return (
    <Container>
      <h1>YOU-DO</h1>
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <div className="mt-5">
        {todos.length ? categoryGroups() : <h3>Add A You Do!</h3>}
      </div>
    </Container>
  );
}

export default Initialize;
