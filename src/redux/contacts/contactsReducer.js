import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  changeFilter,
} from './contactsAction';

const entities = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [delContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,

  [addContactError]: (_, action) => action.payload,
  [addContactRequest]: () => null,

  [delContactError]: (_, action) => action.payload,
  [delContactRequest]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  entities,
  isLoading,
  error,
  filter,
});

//-------------------------------------------------
//Использует IMMER для мутации копии состояния
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     entities: [],
//     isLoading: false,
//     error: null,
//     filter: '',
//   },

//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) =>
//       (state.entities = payload),// мутация
//     [fetchContacts.pending]: state => (state.isLoading = true), // мутация
//   },
// });

// export default contactsSlice.reducer;
