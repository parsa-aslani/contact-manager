import { createContext } from "react";
export const contactcontext = createContext({
  loading: false,
  setloading: () => {},
  contact: {},
  setcontacts: () => {},
  contacts: [],
  searchcontacts: [],
  groups: [],
  contactquery: {},
  oncontactchange: () => {},
  deletecontact: () => {},
  updatecontact: () => {},
  createcontact: () => {},
  searchcontact: () => {},
  setsearchcontacts: () => {},
});
