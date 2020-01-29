const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('style', () => {
    it('should return 55.5', () => {
      const actual = calculateStylePoints([18.5, 18.5, 18.5, 18.5, 18.5]);

      const expected = 55.5;

      assert.equal(actual, expected);
    });
    it('should return 57.5', () => {
      const actual = calculateStylePoints([18.5, 18.5, 19, 20, 20]);

      const expected = 57.5;

      assert.equal(actual, expected);
    });
    it('should return undefined', () => {
      const actual = calculateStylePoints([-1, 18.5, 19, 20, 20.5]);

      const expected = undefined;

      assert.equal(actual, expected);
    });
    it('should return NaN', () => {
      const actual = calculateStylePoints(['18.5', 18.5, 19, 20, 20]);

      const expected = true;

      assert.equal(isNaN(actual), expected);
    });
    it('should return undefined', () => {
      const actual = calculateStylePoints([18.5, 18.5, 19, 20]);

      const expected = undefined;

      assert.equal(actual, expected);
    });
  });
});