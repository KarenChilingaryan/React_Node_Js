const express = require('express')
const controller = require('../controllers/videoSystems');
const router = express.Router();

router.get('/', controller.getAll); // get all videoSystems

router.get('/:id', controller.getById); // get all videoSystems

router.post('/', controller.addTask);

// router.post('/task', controller.addTask); // get all videoSystems

module.exports = router
