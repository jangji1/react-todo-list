import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

  colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

  render() {
    const { colors } = this;
    const {
      changeInput,
      createTodo,
      input,
      todos,
      color
    } = this.props;
    return (
      <div>
        <TodoListTemplate 
          palette={
            <Palette
              colors={colors}
            />
          }
          form={
            <Form
              value={input}
              onChange={changeInput}
              onCreate={createTodo}
            />
          }>
          {<TodoItemList
            todos={todos}
          />}
        </TodoListTemplate>
      </div>
    );
  }
}

// 컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 전달하는 state
const mapToState = (state) => ({
    todos: state.todos
});

// 컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 액션을 보내는 함수
const mapToDispatch = (dispatch) => ({
  changeInput: (e) => dispatch(actions.changeInput(e.target.value)),
  createTodo: () => {
    dispatch(actions.createTodo())
  }
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(mapToState, mapToDispatch)(App);
