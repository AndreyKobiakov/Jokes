import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './reducers/toDoRedcuer';


export default configureStore({
  reducer: {
  toDo : toDoReducer
  },
});
