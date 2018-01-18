import TodoListTemplate from '../components/TodoListTemplate';
import * as actions from '../actions';
import { connect } from 'react-redux';
import * as util from '../utils';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
  input: state.input,
  color: state.color,
  todos: state.todos
})

/* 
  액션 생성자를 사용하여 액션을 생성하고,
  해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => dispatch(actions.changeInput(input)),

})

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListTemplate);