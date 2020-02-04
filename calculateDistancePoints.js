const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if ((typeof distance === 'number' && distance >= 0) && (hillSize === 'mamut' || hillSize === 'large' || hillSize === 'normal') && (typeof kPoint === 'number' && kPoint >= 0)) {
    const roundedDistanceValue = Math.round(distance*2)/2;
    if (hillSize === 'mamut') {
      return 120 + (roundedDistanceValue - kPoint) * 1.2;
    }
    else if (hillSize === 'large') {
      return 60 + (roundedDistanceValue - kPoint) * 1.8;
    }
    else if (hillSize === 'normal') {
      return 60 + (roundedDistanceValue - kPoint) * 2;
    }
  } else {
    console.error('At least one parameter is incorrect, distance & kPoint must be number positive numbers, hillSize must be one of strings: mamut, large, normal');
  }
};

module.exports = calculateDistancePoints;