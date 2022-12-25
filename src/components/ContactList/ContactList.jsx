import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { contacts } from 'redux/contactsSlice';
import { filter } from 'redux/filterSlice';

const ContactList = () => {
  const contactsSelector = useSelector(contacts);
  const filtered = useSelector(filter);

  const getVisibleContacts = contactsSelector.filter(contact => contact.name.toLowerCase().includes(filtered)
  );

  return (
    getVisibleContacts && (
      <ul className={css.contacts__list}>
        {getVisibleContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    )
  );
};

export default ContactList;
