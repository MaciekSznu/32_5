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
  });
});