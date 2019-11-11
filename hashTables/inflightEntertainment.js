function genCache(movieTimes) {
  const cache = {}
  for (let i = 0; i < movieTimes.length; i++) {
    const movieTime = movieTimes[i]
    if (cache[movieTime]) {
      cache[movieTime]++
    } else {
      cache[movieTime] = 1
    }
  }
  return cache
}

function canTwoMoviesFillFlight(movieTimes, flightTime) {
  const cache = genCache(movieTimes)
  for (let i = 0; i < movieTimes.length; i++) {
    const half = flightTime / 2
    const movieTime = movieTimes[i]
    const diff = flightTime - movieTime
    if (diff === half && cache[half] === 2) {
      return true
    } else if (diff !== half && cache[diff]) {
      return true
    }
  }
  return false
}
