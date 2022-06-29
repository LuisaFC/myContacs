const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    // listar todos os registros - listAll
    response.json(contacts);
  }

  async show(request, response) {
    // Retorna apenas 1 registro - listById
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(contact);
  }

  store() {
    // Criar registro - create
  }

  update() {
    // Alterar registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    return response.sendStatus(204);
  }
}

// singleton -> exporta a instância e não a classe
module.exports = new ContactController();
