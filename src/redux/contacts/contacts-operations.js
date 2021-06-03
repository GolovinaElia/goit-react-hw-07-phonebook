import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = ' http://localhost:3000';

const addContacts =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };

    dispatch(actions.addContactRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(actions.addContactSuccess(data)))
      .catch(error => dispatch(actions.addContactError(error)));
  };
const contactOperations = { addContacts };
export default contactOperations;
