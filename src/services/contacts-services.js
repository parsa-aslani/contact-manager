import axios from "axios";

const Server_url = "http://localhost:9000";
// route http://localhost:9000/contacts
export const getallcontacts = () => {
  const url = `${Server_url}/contacts`;
  return axios.get(url);
};
// route http://localhost:9000/contacts/:contactsId
export const getcontact = (contactsId) => {
  const url = `${Server_url}/contacts/${contactsId}`;
  return axios.get(url);
};
// route http://localhost:9000/groups
export const getallgroups = () => {
  const url = `${Server_url}/groups`;
  return axios.get(url);
};
// route http://localhost:9000/groups/:groupsId
export const getgroup = (groupsId) => {
  const url = `${Server_url}/groups/${groupsId}`;
  return axios.get(url);
};
// route http://localhost:9000/contacts
export const createcontacts = (contact) => {
  const url = `${Server_url}/contacts`;
  return axios.post(url, contact);
};
// route http://localhost:9000/contacts/:contactsId
export const editcontacts = (contactsId, contact) => {
  const url = `${Server_url}/contacts/${contactsId}`;
  return axios.put(url, contact);
};
// route http://localhost:9000/contacts/contactsId
export const deletecontacts = (contactsId) => {
  const url = `${Server_url}/contacts/${contactsId}`;
  return axios.delete(url);
};
