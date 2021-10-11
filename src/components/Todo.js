import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteTodo } from '../api/data/todoData';

const TodoStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  h5 {
    flex-grow: 2;
    margin-left: 20px;
  }

  button {
    color: white;

    &:first-child {
      margin-right: 10px;
    }
  }
`;

export default function Todo({ taco, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(taco.firebaseKey).then(setTodos);
    } else {
      // update complete value on todo
    }
  };

  return (
    <TodoStyle className="alert alert-light" role="alert">
      <button
        onClick={() => handleClick('complete')}
        className="btn btn-success"
        type="button"
      >
        COMPLETE
      </button>
      <h5>{taco.name}</h5>
      <div>
        <button
          onClick={() => setEditItem(taco)}
          className="btn btn-info"
          type="button"
        >
          EDIT
        </button>
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
      </div>
    </TodoStyle>
  );
}

Todo.propTypes = {
  taco: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
