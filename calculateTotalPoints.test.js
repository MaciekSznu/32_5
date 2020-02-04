const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

//dodac przypadki z undefined i stringiem jako belką i wiatrem
describe('calculateTotalPoints', () => {
  describe('wind/gate', () => {
    it('should return 125.5', () => {
      const actual = calculateTotalPoints(120, 'large', 120, [18.5, 18.5, 18.5, 18.5, 18.5], 5, 5);

      const expected = 125.5;

      assert.equal(actual, expected);
    });
    it('should return 105.5', () => {
      const actual = calculateTotalPoints(120, 'large', 120, [18.5, 18.5, 18.5, 18.5, 18.5], -5, -5);

      const expected = 105.5;

      assert.equal(actual, expected);
    });
    it('should return undefined', () => {
      const actual = calculateTotalPoints(120, 'large', 120, [18.5, 18.5, 18.5, 18.5, 18.5], 'a', -5);

      const expected = undefined;

      assert.equal(actual, expected);
    });
  });
});