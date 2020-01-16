const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;

// 할일 추가
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  }
});

// 아이디를 선택해서 토글 작업
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = [
  /*
  {  
  id: numver,
  text: string,
  done: boolean
  }
  */
];

export default function todos(state=initialState, action) {
  switch (action.type) {
    case ADD_TODO:     // todo 객체를 state 배열에 추가
      return state.concat(action.todo);
    case TOGGLE_TODO:  // 불변성 지키며 done값을 반전
      return state.map(
        (todo) => todo.id === action.id
          // 아이디 일치 O: 기존 todo 가져오고 done 값만 반전
          ? {...todo, done: !todo.done} 
          // 아이디 일치 X: 그대로 둠
          : todo 
      );
    default:
      return state;
  }
}