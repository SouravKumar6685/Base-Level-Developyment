const request = require('supertest')
const app = require('../app')

describe('Controllers', () => {
  describe('User Controller', () => {
    it('should create a new user', async() => {
      const userData = { name: 'John Doe', email: 'john@example.com' }
      const response = await request(app)
        .post('/users')
        .send(userData)

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
      expect(response.body.name).toBe(userData.name)
    })

    it('should get user by id', async() => {
      const response = await request(app).get('/users/1')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('id')
    })
  })

  describe('Product Controller', () => {
    it('should create a new product', async() => {
      const productData = { name: 'Laptop', price: 999 }
      const response = await request(app)
        .post('/products')
        .send(productData)

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
    })

    it('should get product by id', async() => {
      const response = await request(app).get('/products/1')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('id')
    })
  })
})
