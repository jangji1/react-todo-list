import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';


class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정
  colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 연습1', chekced: false},
      { id: 1, text: '리액트 연습2', chekced: true},
      { id: 2, text: '리액트 연습3', chekced: false}
    ],
    color : '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos : todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => {
      return todo.id === id
    });

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...todos[index],
          checked: !todos[index].checked
        },
        ...todos.slice(index + 1)
      ]
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    });

    this.setState({
      todos: newTodos
    })
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleKeyPress,
      handleChange,
      handleCreate,
      handleToggle,
      handleRemove,
      handleSelectColor,
      colors
    } = this;

    return (
      <div>
        <TodoListTemplate 
          palette={
            <Palette
              colors={colors}
              selected={color}
              onSelect={handleSelectColor}
            />
          }
          form={
            <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
              color={color}
            />
          }>
          <TodoItemList 
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
