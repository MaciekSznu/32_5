const calculateStylePoints = (styleNotes) => {
  const lowestNote = Math.min(...styleNotes);
  const highestNote = Math.max(...styleNotes);
  const totalSum = styleNotes.reduce((a, b) => a + b);
  return totalSum - lowestNote - highestNote;
};


module.exports = calculateStylePoints;