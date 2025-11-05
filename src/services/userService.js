const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
]

exports.getUsers = () => users

exports.getUserById = (id) => users.find(user => user.id === parseInt(id))
