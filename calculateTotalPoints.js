const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  if (typeof windFactor !== 'string' && typeof windFactor !== 'undefined' && typeof gateFactor !== 'string' && typeof gateFactor !=='undefined') {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return distancePoints + stylePoints + windFactor + gateFactor;
  } else {
    console.error('windFactor & gateFactor must be numbers');
  }
};

module.exports = calculateTotalPoints;