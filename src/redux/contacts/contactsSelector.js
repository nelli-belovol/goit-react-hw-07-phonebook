export const getContacts = state => state.contacts.entities;

export const getFilter = state => state.contacts.filter;

export const isLoading = state => state.contacts.isLoading;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normilizedFilter = filter.toLowerCase();

  return contacts.filter(({ contact }) =>
    contact.name.toLowerCase().includes(normilizedFilter),
  );
};
