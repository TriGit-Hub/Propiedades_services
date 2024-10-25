const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// Rutas para propiedades
router.post('/:id/movimientos', propertyController.createMovement);
router.post('/:id/eventos', propertyController.createEvent);

module.exports = router;
