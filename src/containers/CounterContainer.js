import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, setDiff } from '../modules/counter';

const CounterContainer = () => {
  // 상태를 조회하는 useSelector
  const { number, diff } = useSelector(state => ({
    // 매개변수 state 는 store.getState()의 return값임
    number: state.counter.number,
    diff: state.counter.diff,
  })); 

  const dispatch = useDispatch();
  
  // 액션을 생성해서 dispatch 함
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </div>
  );
};

export default CounterContainer;