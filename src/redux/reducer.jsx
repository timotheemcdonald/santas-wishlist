import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if(!state.wishList.includes(action.payload))
      return {
        ...state,
        wishList: [...state.wishList, action.payload]
      };
//the if statement above is supposed to prevent duplicate values from being added, however it only works on the immediate submission. I.E. if user adds 1, they cannot consecutively add 1 again. however, if they add 1 then 2 then 1 the second 1 will add 
    case DELETE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(item => item !== action.payload)
      };
    default:
      return {
        wishList: [],
      };
  }
};

export default reducer;