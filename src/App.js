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
      color,
      selectColor,
      toggleTodo,
      removeTodo,
      onKeyPress
    } = this.props;
    
    return (
      <div>
        <TodoListTemplate 
          palette={
            <Palette
              colors={colors}
              selected={color}
              onSelect={selectColor}
            />
          }
          form={
            <Form
              value={input}
              color={color}
              onChange={changeInput}
              onCreate={createTodo}
              onKeyPress={onKeyPress}
            />
          }
        >
          {<TodoItemList
            todos={todos}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />}
        </TodoListTemplate>
      </div>
    );
  }
}

// 컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 전달하는 state
const mapStateToProps = (state) => ({
  input: state.input,
  color: state.color,
  todos: state.todos
});

// 컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 액션을 보내는 함수
const mapDispatchToProps = (dispatch) => ({
  changeInput: (e) => dispatch(actions.changeInput(e.target.value)),
  createTodo: () => dispatch(actions.createTodo()),
  onKeyPress: (e) => {
    if(e.key === 'Enter') dispatch(actions.createTodo())
  },
  selectColor: (color) => dispatch(actions.selectColor(color)),
  toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
  removeTodo: (id) => dispatch(actions.removeTodo(id))
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(mapStateToProps, mapDispatchToProps)(App);
