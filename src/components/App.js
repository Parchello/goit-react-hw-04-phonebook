import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setfilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const existedContact = contacts.some(
      contact => contact.name === newContact.name
    );
    if (existedContact) {
      toast.error(`${newContact.name} is already in contact list`);
    } else {
      const idContact = {
        id: nanoid(),
        ...newContact,
      };
      setContacts(prevContacts => [...prevContacts, idContact]);
      toast.success('New contact added');
    }
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(item => item.id !== contactId);
    });
    toast.success(
      'Why, just why You deleted this contact? anyway its not here now =)'
    );
  };

  const updateContactFilter = newFilter => {
    setfilter(newFilter);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phone Book</h1>
      <PhoneBook onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} updateContact={updateContactFilter} />
      <Contacts contactList={filteredContacts} onDelete={deleteContact} />
      <Toaster />
    </div>
  );
};
