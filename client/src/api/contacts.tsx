import { Contact, ContactFormData } from '../context/ContactContext';

// Functions for interacting with the backend API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Get all contacts
export const fetchContacts = async (): Promise<Contact[]> => {
  // TODO: Implement fetch contacts from API
  return [];
};

// Get single contact by ID
export const fetchContactById = async (id: string): Promise<Contact> => {
  // TODO: Implement fetch single contact from API
  return {} as Contact;
};

// Create new contact
export const createContact = async (contactData: ContactFormData): Promise<Contact> => {
  // TODO: Implement create contact API call
  return {} as Contact;
};

// Update contact
export const updateContact = async (id: string, contactData: ContactFormData): Promise<Contact> => {
  // TODO: Implement update contact API call
  return {} as Contact;
};

// Delete contact
export const deleteContact = async (id: string): Promise<void> => {
  // TODO: Implement delete contact API call
}; 