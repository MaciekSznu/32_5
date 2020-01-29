const calculateStylePoints = (styleNotes) => {
  const lowestNote = Math.min(...styleNotes);
  const highestNote = Math.max(...styleNotes);
  if (lowestNote >= 0 && highestNote <= 20 && styleNotes.length === 5) {
  const totalSum = styleNotes.reduce((a, b) => a + b);
  return totalSum - lowestNote - highestNote;
  }
};


module.exports = calculateStylePoints;