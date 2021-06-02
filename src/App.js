import React from 'react';
import style from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => (
  // addContacts = contact => {
  //   const { name } = contact;
  //   const { contacts } = this.state;
  //   const inputName = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase(),
  //   );

  //   if (inputName) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   }
  // };
  <div className={style.phonebook}>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default App;
