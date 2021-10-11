import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../api/data/todoData';

const initialState = {
  name: '',
  complete: false,
  uid: '',
};
export default function TodoForm({ obj, setTodos }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        complete: obj.complete,
        date: obj.date,
        uid: obj.uid,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      // update the todo
    } else {
      createTodo({ ...formInput, date: new Date() }).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Enter A You Do!"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
  setTodos: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  obj: {},
};
