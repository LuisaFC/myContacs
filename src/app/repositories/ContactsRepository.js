const { v4 } = require('uuid');
const db = require('../../database');

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
  async findAll() {
    // list all registers
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id =  $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email =  $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    // Registro
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.find((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
