import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTodos = (completeValue) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos.json?orderBy="complete"&equalTo=${completeValue}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createTodo = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/todos.json`, object)
    .then((response) => {
      axios
        .patch(`${baseURL}/todos/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(() => getTodos(false).then(resolve));
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
});

const updateTodo = (todoObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/todos/${todoObj.firebaseKey}.json`, todoObj)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
});

export {
  getTodos, createTodo, deleteTodo, updateTodo,
};
