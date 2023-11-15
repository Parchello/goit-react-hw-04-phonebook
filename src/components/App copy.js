import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  componentDidMount() {
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  addContact = newContact => {
    const { contacts } = this.state;
    const existedContact = contacts.some(
      contact => contact.name === newContact.name
    );
    if (existedContact) {
      alert(`${newContact.name} is already in contact list`);
    } else {
      const idContact = {
        id: nanoid(),
        ...newContact,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, idContact],
      }));
      console.log(idContact);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
    console.log(contactId);
  };

  updateContactFilter = newFilter => {
    console.log(newFilter);
    this.setState({ filter: newFilter });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phone Book</h1>
        <PhoneBook onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          updateContact={this.updateContactFilter}
        />
        <Contacts
          contactList={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
