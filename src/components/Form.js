import React from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input type="text" 
        value={value} 
        onChange={onChange} 
        onKeyPress={onKeyPress}
        style={{color}}/>
      <button type="button" className="create-button" onClick={onCreate}>
        추가
      </button>
    </div>
  );
}

export default Form;