const userService = require('../services/userService')

exports.getAllUsers = (req, res) => {
  const users = userService.getUsers()
  res.status(200).json(users)
}

exports.getUserById = (req, res) => {
  const { id } = req.params
  const user = userService.getUserById(id)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.status(200).json(user)
}
