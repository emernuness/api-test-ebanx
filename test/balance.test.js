const request = require('supertest');
const app = require('../src/app');

describe('GET /balance', () => {
  it('should return balance', async () => {
    const res = await request(app).get('/balance');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('balance');
  });
});