import React from 'react';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { increase, decrease, setDiff } from '../modules/counter';

const CounterContainer = ({
  number, diff, onIncrease, onDecrease, onSetDiff
}) => {

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

// 상태를 조회하는 useSelector 역할
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// 액션을 생성해서 dispatch 하는 역할
const mapDispatchToProps = (dispatch) => ({
  onIncrease : () => dispatch(increase()),
  onDecrease : () => dispatch(decrease()),
  onSetDiff : (diff) => dispatch(setDiff(diff)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);