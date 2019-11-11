function sortScores(unorderedScores, highestPossibleScore) {

  const cache = generateCache(unorderedScores, highestPossibleScore)
  const sorted = createSortedArray(cache, highestPossibleScore);

  return sorted
}

function createSortedArray(cache, highestPossibleScore) {
  let results = []
  for (let i = highestPossibleScore; i >= 0; i--) {
    const scoreValue = cache[i]
    if (scoreValue) {
      const inserted = insert(scoreValue, i)
      results = results.concat(inserted)
    }
  }
  return results
}

function insert(num, value) {
  const res = []
  for (let i = 0; i < num; i++) {
    res.push(value)
  }
  return res
}

function generateCache(unorderedScores, highestPossibleScore) {
  const cache = {}
  for (let i = 0; i < unorderedScores.length; i++) {
    const score = unorderedScores[i]
    if (score <= highestPossibleScore) {
      if (cache[score]) {
        cache[score]++
      } else {
        cache[score] = 1
      }
    }
  }
  return cache
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
