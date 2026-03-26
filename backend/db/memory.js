// In-memory database for development
let contacts = [];
let idCounter = 1;

const db = {
  contacts: {
    find: async () => {
      return JSON.parse(JSON.stringify(contacts));
    },
    
    findById: async (id) => {
      return contacts.find(c => c._id === String(id));
    },
    
    create: async (data) => {
      const contact = {
        _id: String(idCounter++),
        ...data,
        createdAt: new Date(),
      };
      contacts.push(contact);
      return JSON.parse(JSON.stringify(contact));
    },
    
    findByIdAndUpdate: async (id, data) => {
      const index = contacts.findIndex(c => c._id === String(id));
      if (index === -1) return null;
      contacts[index] = { ...contacts[index], ...data };
      return JSON.parse(JSON.stringify(contacts[index]));
    },
    
    findByIdAndDelete: async (id) => {
      const index = contacts.findIndex(c => c._id === String(id));
      if (index === -1) return null;
      const deleted = contacts.splice(index, 1);
      return deleted[0];
    },
  },
};

module.exports = db;
