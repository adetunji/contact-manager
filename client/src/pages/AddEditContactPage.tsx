import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';
import ContactForm from '../components/ContactForm';
import { ContactFormData, Contact } from '../context/ContactContext';

const AddEditContactPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { contacts } = useContacts();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      // TODO: Implement fetching contact by ID
      const foundContact = contacts.find((c: Contact) => c.id === id);
      setContact(foundContact || null);
    }
  }, [id, contacts]);

  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    try {
      // TODO: Implement save/update contact functionality
      console.log('Saving contact:', formData);
      navigate('/');
    } catch (error) {
      console.error('Error saving contact:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (id && !contact) {
    return <div className="container">Contact not found.</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>{contact ? 'Edit Contact' : 'Add New Contact'}</h1>
      </div>

      <ContactForm
        contact={contact}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

      {loading && <p>Saving...</p>}
    </div>
  );
};

export default AddEditContactPage; 