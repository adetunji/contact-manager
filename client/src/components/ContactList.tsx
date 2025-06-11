import React from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../context/ContactContext';

interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDeleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        contacts.map(contact => (
          <div key={contact.id} className="contact-item">
            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              {contact.address && <p>Address: {contact.address}</p>}
            </div>
            <div className="contact-actions">
              <Link to={`/edit/${contact.id}`} className="btn btn-primary">
                Edit
              </Link>
              <button
                onClick={() => onDeleteContact(contact.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList; 