const userController = require('./userController');

const router = require('express').Router();

router.post('/create', userController.createUser);
router.get('/list', userController.getUsers);
router.get('/get', userController.getById);

module.exports = router;
