const request = require('supertest')
const app = require('../app')

describe('Controllers', () => {
  describe('User Controller', () => {
    it('should get all users', async() => {
      const response = await request(app).get('/users')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body.length).toBeGreaterThan(0)
    })

    it('should get user by id', async() => {
      const response = await request(app).get('/users/1')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toBe('1')
    })

    it('should return 404 for non-existent user', async() => {
      const response = await request(app).get('/users/999')
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('message')
    })
  })

  describe('Product Controller', () => {
    it('should get all products', async() => {
      const response = await request(app).get('/products')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body.length).toBeGreaterThan(0)
    })

    it('should get product by id', async() => {
      const response = await request(app).get('/products/1')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toBe('1')
    })

    it('should return 404 for non-existent product', async() => {
      const response = await request(app).get('/products/999')
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('message')
    })
  })
})
