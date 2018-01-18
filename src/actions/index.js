/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
*/

import * as types from './ActionTypes';

export const changeInput = (input) => ({
  type: types.CHANGE_INPUT,
  input
});

export const createTodo = (text) => ({
  types: types.CREATE_TODO,
  text
});

export const toggleTodo = (id) => ({
  types: types.TOGGLE_TODO,
  id
});

export const removeTodo = (id) => ({
  types: types.REMOVE_TODO,
  id
});

export const selectColor = (color) => ({
  types: types.SELECT_COLOR,
  color
});