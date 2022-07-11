const { Client } = require('pg');

// Objeto com informações de conexão e acesso a base de dados
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

// conectando base de dados
client.connect();

// Executar queries no banco de dados
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
