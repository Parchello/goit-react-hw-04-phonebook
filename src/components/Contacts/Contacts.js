import { ContactDelButton } from './Contacts.styled';

export const Contacts = ({ contactList, onDelete }) => {
  return (
    <div>
      {
        <ul>
          {contactList.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ContactDelButton
                type="button"
                onClick={() => onDelete(contact.id)}
              >
                delete
              </ContactDelButton>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
