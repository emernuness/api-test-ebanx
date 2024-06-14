const request = require('supertest');
const app = require('../src/app');

describe('POST /event', () => {
  it('should create an event', async () => {
    const res = await request(app)
      .post('/event')
      .send({ type: 'credit', amount: 50 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('type', 'credit');
    expect(res.body).toHaveProperty('amount', 50);
  });
});