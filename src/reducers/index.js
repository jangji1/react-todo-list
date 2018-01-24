import * as types from '../actions/ActionTypes';

let id = 0;

// 초기 상태를 정의합니다
const initialState = {
  input: '',
  color: '#343a40',
  todos: []
}

/* 
  리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
  state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
  action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
  이 때 주의 할 점은 state 를 직접 수정하면 안되고,
  기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
*/

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case types.CREATE_TODO:
      return {
        ...state,
        input: '',
        todos: [
          ...state.todos,
          {
            id: id++,
            text: state.input,
            checked: false,
            color: state.color
          }
        ]
      };
    case types.TOGGLE_TODO:
      const index = state.todos.findIndex((todo) => {
        return todo.id === action.id
      });
      
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          {
            ...state.todos[index],
            checked: !state.todos[index].checked
          },
          ...state.todos.slice(index + 1)
        ]
      }
    case types.REMOVE_TODO:
      const newTodos = state.todos.filter((todo) => {
        return todo.id !== action.id
      });
      return {
        ...state,
        todos: newTodos
      }
    case types.SELECT_COLOR:
      return {
        ...state,
        color: action.color
      }
    default:
      return state;
  }
}

export default reducer;