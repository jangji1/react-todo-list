/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
*/

import * as types from './ActionTypes';

export const changeInput = (input) => {
  return dispatch => {
    dispatch({
      type: types.CHANGE_INPUT,
      input
    });
  };
};

export const createTodo = () => {
  return dispatch => {
    dispatch({
      type: types.CREATE_TODO
    });
  };
};

export const toggleTodo = (id) => {
  return dispatch => {
    dispatch({
      type: types.TOGGLE_TODO,
      id
    });
  };
}

export const removeTodo = (id) => {
  return dispatch => {
    dispatch({
      type: types.REMOVE_TODO,
      id
    });
  };
};

export const selectColor = (color) => {
  return dispatch => {
    dispatch({
      type: types.SELECT_COLOR,
      color
    });
  };
};