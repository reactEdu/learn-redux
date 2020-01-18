import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
  // useSelector()로 상태를 가져온다.
  const todos = useSelector(state => state.todos);

  // useDispatch()로 액션을 발생시킨다.
  const dispatch = useDispatch();

  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return (
    <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
  );
};

export default TodosContainer;