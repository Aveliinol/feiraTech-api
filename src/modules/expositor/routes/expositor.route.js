const express = require('express');
const expositorController = require('../controllers/expositor.controller');

const router = express.Router();

router.post('/', expositorController.criarExpositor);

// router.put('/:id');

// router.get('/');

// router.get('/:id');

// router.delete('/:id');

module.exports = router