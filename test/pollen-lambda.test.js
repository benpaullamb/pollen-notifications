const pollenLambda = require('../src/pollen-lambda').handler;

test('pollen-lambda', async () => {
  const res = await pollenLambda();
  const body = JSON.parse(res.body);

  expect(res.statusCode).toBe(200);

  expect(body).toMatchObject({
    pollenIndex: expect.any(Number),
    pollenIndexBand: expect.any(String),
    pollenIndexText: expect.any(String),
    pollenIndexIconText: expect.any(String),
  });
});
