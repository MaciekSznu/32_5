const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const roundedDistanceValue = Math.round(distance*2)/2;
    if (hillSize === 'mamut') {
      return 120 + (roundedDistanceValue - kPoint) * 1.2;
    }
    else if (hillSize === 'large') {
      return 60 + (roundedDistanceValue - kPoint) * 1.8;
    }
    else {
      return 60 + (roundedDistanceValue - kPoint) * 2;
    }
};

module.exports = calculateDistancePoints;