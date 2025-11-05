const request = require('supertest')
const app = require('../app')

describe('Express App', () => {
  describe('GET /', () => {
    it('should return welcome message', async() => {
      const response = await request(app).get('/')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toContain('Welcome')
    })
  })

  describe('GET /health', () => {
    it('should return health status', async() => {
      const response = await request(app).get('/health')
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ status: 'OK', timestamp: expect.any(String) })
    })
  })

  describe('GET /users', () => {
    it('should return users list', async() => {
      const response = await request(app).get('/users')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
    })
  })

  describe('GET /products', () => {
    it('should return products list', async() => {
      const response = await request(app).get('/products')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
    })
  })

  describe('Non-existent routes', () => {
    it('should return 404 for unknown routes', async() => {
      const response = await request(app).get('/nonexistent')
      expect(response.status).toBe(404)
    })
  })
})
