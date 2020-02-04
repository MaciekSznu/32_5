const calculateStylePoints = (styleNotes) => {
  const lowestNote = Math.min(...styleNotes);
  const highestNote = Math.max(...styleNotes);
  if (lowestNote >= 0 && highestNote <= 20 && styleNotes.length === 5) {
  const totalSum = styleNotes.reduce((a, b) => a + b);
  return totalSum - lowestNote - highestNote;
  } else {
    console.error('At least one note is incorrect or there are too many or not enough notes; styleNotes must be an array of 5 numbers, each number must be greater than 0 and not greater than 20');
  }
};


module.exports = calculateStylePoints;