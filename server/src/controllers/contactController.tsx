import { Request, Response } from 'express';
import { Contact, ContactFormData } from '../models/Contact';
import { FileHandler } from '../utils/fileHandler';

// Get all contacts
export const getAllContacts = async (req: Request, res: Response): Promise<void> => {
  // TODO: Implement get all contacts logic
};

// Get single contact by ID
export const getContactById = async (req: Request, res: Response): Promise<void> => {
  // TODO: Implement get contact by ID logic
};

// Create new contact
export const createContact = async (req: Request, res: Response): Promise<void> => {
  // TODO: Implement create contact logic
};

// Update contact
export const updateContact = async (req: Request, res: Response): Promise<void> => {
  // TODO: Implement update contact logic
};

// Delete contact
export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  // TODO: Implement delete contact logic
}; 