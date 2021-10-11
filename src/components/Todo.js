import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({ taco }) {
  return (
    <>
      <div className="alert alert-light" role="alert">
        <button className="btn btn-success" type="button">
          COMPLETE
        </button>
        {taco.name}
        <button className="btn btn-danger" type="button">
          DELETE
        </button>
      </div>
    </>
  );
}

Todo.propTypes = {
  taco: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
