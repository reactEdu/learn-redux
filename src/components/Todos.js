import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle }) => { // todo: 할일 낱개
  return (
    <li 
      style={{
        textDecoration: todo.done? 'line-through' : 'none'
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
};

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {
        todos.map(todo => (<TodoItem 
          key={todo.id} todo={todo} onToggle={onToggle} />))
      }
    </ul>
  );
};

// todos: 할일 목록, onCreate: 새로운 할일 등록, onToggle: 할일 상태 반전
const Todos = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} />
        <button>할일 등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle}/>
    </div>
  );
};

export default Todos;