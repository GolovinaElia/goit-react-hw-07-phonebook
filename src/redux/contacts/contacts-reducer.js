import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContacts,
} from './contacts-actions';

const items = createReducer([], {
  addContactSuccess: (state, { payload }) => [...state, payload],
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
