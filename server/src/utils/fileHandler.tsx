import { Contact, ContactFormData } from '../models/Contact';

// Utility for reading/writing JSON data
export class FileHandler {
  // TODO: Implement reading contacts from JSON file
  static async readContacts(): Promise<Contact[]> {
    return [];
  }

  // TODO: Implement writing contacts to JSON file
  static async writeContacts(contacts: Contact[]): Promise<void> {
    // TODO: Implement write logic
  }

  // TODO: Implement adding a contact
  static async addContact(contact: Contact): Promise<Contact> {
    return contact;
  }

  // TODO: Implement updating a contact
  static async updateContact(id: string, updates: Partial<ContactFormData>): Promise<Contact> {
    return {} as Contact;
  }

  // TODO: Implement deleting a contact
  static async deleteContact(id: string): Promise<Contact> {
    return {} as Contact;
  }

  // TODO: Implement ID generation
  static generateId(): string {
    return '';
  }
} 