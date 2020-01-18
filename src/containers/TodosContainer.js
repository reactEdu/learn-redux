import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = ({
  todos, addTodo, toggleTodo,
}) => {
  const onCreate = useCallback((text)=> addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);
  
  return (
    <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
  );
};

const mapStateToProps = (state) => ({
  todos : state.todos
});

const mapStateToDispatch = {
  addTodo, toggleTodo,
};

export default connect(mapStateToProps, mapStateToDispatch)(TodosContainer);