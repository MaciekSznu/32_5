const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');


describe('calculateDistancePoints', () => {
  describe('hillSize', () => {
    it('should return 120', () => {
      const actual = calculateDistancePoints(180, 'mamut', 180);

      const expected = 120;

      assert.equal(actual, expected);
    });
    it('should return 60', () => {
      const actual = calculateDistancePoints(120, !'mamut', 120);

      const expected = 60;

      assert.equal(actual, expected);
    });
  });
  describe('kPoint and distance', () => {
    it('should return 121.2', () => {
      const actual = calculateDistancePoints(181.2, 'mamut', 180);

      const expected = 121.2;

      assert.equal(actual, expected);
    });
    it('should return 61.8', () => {
      const actual = calculateDistancePoints(120.8, 'large', 120);

      const expected = 61.8;

      assert.equal(actual, expected);
    });
    it('should return 63', () => {
      const actual = calculateDistancePoints(91.5, 'normal', 90);

      const expected = 63;

      assert.equal(actual, expected);
    });
    it('should return 118.8', () => {
      const actual = calculateDistancePoints(179, 'mamut', 180);

      const expected = 118.8;

      assert.equal(actual, expected);
    });
    it('should return 58.2', () => {
      const actual = calculateDistancePoints(119, 'large', 120);

      const expected = 58.2;

      assert.equal(actual, expected);
    });
    it('should return 58', () => {
      const actual = calculateDistancePoints(89, 'normal', 90);

      const expected = 58;

      assert.equal(actual, expected);
    });
  });
});
