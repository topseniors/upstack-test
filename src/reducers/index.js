import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import person from './person';

export default combineReducers({
  user,
  runtime,
  person,
});
