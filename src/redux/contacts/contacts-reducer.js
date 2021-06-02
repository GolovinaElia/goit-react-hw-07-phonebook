import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  'contacts/add': (state, { payload }) => [...state, payload],
  'contacts/delete': (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  'contacts/changeFilter': (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
