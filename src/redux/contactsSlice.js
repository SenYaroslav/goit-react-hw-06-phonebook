import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const temporary = [
  { id: 'Qm9FFEC', name: 'Adam Mavrik', number: '234234' },
  { id: '9P4JM8p', name: 'Adamas Cheenbo', number: '374239' },
  { id: '9P43F8p', name: 'Adele Norm', number: '227411' },
  { id: '9345S8p', name: 'Damadi Foofi', number: '546874' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: temporary,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(7),
            name,
            number,
          },
        };
      },
    },
    delContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

const persistConfig = { key: 'contacts', version: 1, storage };
export const persReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//Selector
export const contacts = state => state.contacts;
