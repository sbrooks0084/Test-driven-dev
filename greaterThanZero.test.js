const greaterThanZero = require('./greaterThanZero');

test('any integer > 0', () => {
  expect(greaterThanZero(0)).toBeFalsy;
  expect(greaterThanZero(-1)).toBeFalsy;
  expect(greaterThanZero(1)).toBeTruthy;
});