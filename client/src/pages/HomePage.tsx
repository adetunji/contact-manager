import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  const { contacts, loading, error } = useContacts();
  const [searchTerm, setSearchTerm] = useState<string>('');

  // TODO: Implement search functionality
  const filteredContacts = contacts;

  const handleDeleteContact = (id: string) => {
    // TODO: Implement delete contact functionality
    console.log('Delete contact:', id);
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Contact Manager Express</h1>
        <Link to="/add" className="btn btn-primary">
          Add New Contact
        </Link>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default HomePage; 