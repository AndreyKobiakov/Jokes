import { DELETE_TODO, SAVE_TODO, GET_TODO } from '../types';

const toDoReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_TODO:
      return [...state, payload];
    case GET_TODO:
      return [payload];
    case DELETE_TODO:
      return state.filter((el) => el !== payload);
    default:
      return state;
  }
};
export default toDoReducer;
