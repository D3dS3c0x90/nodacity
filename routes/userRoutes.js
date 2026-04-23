const express = require('express')
const router = express.Router()
const path = require('path');

const {getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController')

router.get('/', getUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

// =======================
// 🟢 PAGE ROUTES
// =======================

router.get('/page', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/get.html'));
});

module.exports = router
