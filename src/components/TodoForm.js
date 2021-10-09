import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../api/data/todoData';

export default function TodoForm({ obj }) {
  const [formInput, setInput] = useState({
    name: obj.name || '',
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(formInput).then(() => {
      setInput({
        name: '',
      });
    });
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
  }),
};

TodoForm.defaultProps = {
  obj: {},
};
