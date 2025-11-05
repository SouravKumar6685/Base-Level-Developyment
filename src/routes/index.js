const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const homeController = require('../controllers/homeController')

router.get('/', homeController.getHome)

router.use('/users', userRoutes)
router.use('/products', productRoutes)

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString()
  })
})

module.exports = router
