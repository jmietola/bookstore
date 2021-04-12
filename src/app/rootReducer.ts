import { combineReducers } from '@reduxjs/toolkit';
import { reducer as booksReducer } from '../ducks/booksDuck';

const rootReducer = () =>
  combineReducers({
    books: booksReducer
  });

export default rootReducer;
