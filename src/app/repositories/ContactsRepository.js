const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Luisa',
    email: 'luisa@email.com',
    phone: '123-456',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '123-666',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@email.com',
    phone: '123-456',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    // list all registers
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.find((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
