// Calculate the average score for each category

function calculateResult(categoryScores) {
  const averageScore = categoryScores.reduce((a, b) => a + b, 0) / categoryScores.length;
  return averageScore;
}