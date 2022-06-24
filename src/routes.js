const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

// create route
router.get('/contacts', ContactController.index);

module.exports = router;
