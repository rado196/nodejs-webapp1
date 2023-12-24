const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.put('/:id/balance/increment', UserController.increment);
router.put('/:id/balance/decrement', UserController.decrement);

module.exports = router;
