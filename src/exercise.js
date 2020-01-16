import { createStore } from 'redux';

const initialState = {
  counter: 0,
  text: '',
  list: []
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter+1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter-1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// console.log(store.getState());

// 구독을 위한 리스너
const listener = () => {
  const state = store.getState(); // middleware 쓸때까지 쓸일이 없음
  console.log(state);
}

// 구독 : react-redux 쓰면 쓸일이 없음
const unsubscribe = store.subscribe(listener);
// 해지
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, text: '와우'}));