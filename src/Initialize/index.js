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
    // const sortedObj = {};
    // todos.forEach((todo) => {
    //   // LOOKING to see if a key of item exists
    //   if (todo.category in sortedObj) {
    //   // if so, set the value of the key array to the spreaded object and the current todo
    //     sortedObj[todo.category] = [...sortedObj[todo.category], todo];
    //   } else {
    //   // if not, create the category and set the value as the current todo
    //     sortedObj[todo.category] = [todo];
    //   }
    // });

    // DOING THE SAME AS ABOVE USING REDUCE
    const sortedObj = todos.reduce((data, currentObject) => {
      const main = data;
      // if the current category already exists, push the currentObject into the array...otherwise, set the value to an array and push the currentObject into it.
      (main[currentObject.category] = main[currentObject.category] || []).push(
        currentObject,
      );
      return main;
    }, {});

    return Object.keys(sortedObj).map((category) => (
      <div key={category}>
        <h4>Category {category}</h4>
        {sortedObj[category].map((todo) => (
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
        {todos.length ? categoryGroups() : <h3>Add A YOU DO!</h3>}
      </div>
    </Container>
  );
}

export default Initialize;
