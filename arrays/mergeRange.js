function checkRange(date1, date2) {
  const start1 = date1.startTime
  const start2 = date2.startTime
  const end1 = date1.endTime
  const end2 = date2.endTime

  let startTime

  if (start2 >= start1 && start2 <= end1) {
    startTime = start1
  } else if (start1 >= start2 && start1 <= end2) {
    startTime = start2
  } else {
    return false
  }

  const endTime = end1 > end2 ? end1 : end2
  return { startTime, endTime }
}

function mergeRanges(meetings) {
  const results = []
  while (meetings.length) {
    const last = meetings.pop()

    if (!results.length) {
      results.push(last)
      continue
    }

    for (let i = 0; i < results.length; i++) {
      const merged = checkRange(last, results[i])
      if (merged) {
        results[i] = merged
        break
      } else {
        results.push(last)
        break
      }
    }
  }

  results.sort((a, b) => a.startTime - b.startTime)
  return results
}

const times = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 5 },
  { startTime: 6, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 }
]

const res = mergeRanges(times)


