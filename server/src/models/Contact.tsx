// Contact model - defines the structure of a contact
export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export class ContactModel {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public address: string = ''
  ) {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  createdAt: string;
  updatedAt: string;

  // TODO: Implement validation methods
  static validate(data: ContactFormData): string[] {
    return [];
  }

  // TODO: Implement update method
  update(updates: Partial<ContactFormData>): void {
    // TODO: Implement update logic
  }
} 