import React from 'react';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { increase, decrease, setDiff } from '../modules/counter';

// props에 매핑한 이름 변경됬으므로 확인!
const CounterContainer = ({
  number, diff, increase, decrease, setDiff
}) => {

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={increase}
        onDecrease={decrease}
        onSetDiff={setDiff}
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
// 같은 이름으로 매핑해서 넣으므로 값 필요 없음
const mapDispatchToProps = {
  increase, decrease, setDiff,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);