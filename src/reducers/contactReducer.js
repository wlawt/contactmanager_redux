import {
  GET_CONTACTS,
  DELETE_CONTACTS,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from '../actions/types';

const initialState = {
  contacts: [],
  contact: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload ? (contact = action.payload) : contact
        )
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        // Since it's adding a contact, needs to be story in array
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
