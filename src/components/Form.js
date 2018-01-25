import React from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {

  const createTodo = () => {
    onCreate();
    this.input.focus();
  }

  return (
    <div className="form">
      <input type="text" 
        value={value} 
        onChange={onChange} 
        onKeyPress={onKeyPress}
        style={{color}}
        ref={ref => this.input = ref}
      />
      <button type="button" className="create-button" onClick={createTodo}>
        추가
      </button>
    </div>
  );
}

export default Form;