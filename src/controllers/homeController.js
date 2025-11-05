exports.getHome = (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Multi-Route Node.js API 🚀',
    status: 'OK'
  })
}
