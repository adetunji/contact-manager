import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Contact interface
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

// Initial state
const initialState = {
  contacts: [] as Contact[],
  loading: false,
  error: null as string | null
};

// Action types
const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_CONTACTS: 'SET_CONTACTS',
  ADD_CONTACT: 'ADD_CONTACT',
  UPDATE_CONTACT: 'UPDATE_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  SET_ERROR: 'SET_ERROR'
} as const;

type ActionType = typeof ACTIONS[keyof typeof ACTIONS];

interface Action {
  type: ActionType;
  payload?: any;
}

// Reducer function
const contactReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.SET_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };
    case ACTIONS.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case ACTIONS.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case ACTIONS.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

// Create context
const ContactContext = createContext<any>(undefined);

// Provider component
interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // TODO: Implement context actions (loadContacts, addContact, etc.)

  const value = {
    ...state,
    // TODO: Add action functions here
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook to use the context
export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactProvider');
  }
  return context;
}; 