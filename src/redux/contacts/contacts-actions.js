import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:3000';

const addContacts =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };

    dispatch({ type: 'contacts/addContactRequest' });

    axios
      .post('/contacts', contact)
      .then(({ data }) =>
        dispatch({ type: 'contacts/addContactSuccess', payload: data }),
      )
      .catch(error =>
        dispatch({ type: 'contacts/addContactError', payload: error }),
      );
  };

// const addContacts = createAction('contacts/add', ({ name, number }) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

const deleteContacts = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const numberContact = { addContacts, deleteContacts, changeFilter };
export default numberContact;
