import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './exercise'; // 리액트 없이 리덕스만 쓰기
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules'; // index 생략 가능
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
