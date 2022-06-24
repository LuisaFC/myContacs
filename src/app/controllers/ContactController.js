class ContactController {
  index(request, response) {
    // listar todos os registros - listAll
    response.send('Send from Contact Controller');
  }

  show() {
    // Retorna apenas 1 registro - listById
  }

  store() {
    // Criar registro - create
  }

  update() {
    // Alterar registro
  }

  delete() {
    // Deletar um registro
  }
}

// singleton -> exporta a instância e não a classe
module.exports = new ContactController();
