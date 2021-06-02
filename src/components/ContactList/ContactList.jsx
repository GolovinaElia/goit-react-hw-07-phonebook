import style from './ContactList.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <div className={style.contacts}>
    <ul className={style.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={uuidv4()} className={style.contactsItem}>
          <p className={style.contactsForm}>
            <span className={style.contactsName}>{name}</span>: {number}
            <button
              className={style.buttonContacts}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const getVisibleContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContacts(id)),
});

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
