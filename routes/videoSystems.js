const express = require('express')
const controller = require('../controllers/videoSystems');
const router = express.Router();

router.get('/', controller.getAll); // get all videoSystems

router.get('/:id', controller.getById); // get all videoSystems

router.post('/', controller.addTask);

module.exports = router
