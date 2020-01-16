// 액션
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0 ,
  diff: 5
}

// reducer는 반드시 export default
export default function reducer(state = initialState, action) {
 switch (action.type) {
   case SET_DIFF:
     console.log(action.diff)
    return {
      ...state,
      diff: action.diff,
    };
   case INCREASE:
    return {
      ...state,
      number: state.number + state.diff,
    };
  case DECREASE:
    return {
      ...state,
      number: state.number - state.diff,
    };
 
   default:
     return state;
 }
}