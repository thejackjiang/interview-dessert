function reverse(array, i, j) {
  while (i < j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    i++
    j--
  }
}

function reverseWords(array) {
  const spaces = []
  let prevSpace = -1
  reverse(array, 0, array.length - 1)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ' ') {
      const start = prevSpace + 1
      const end = i - 1
      spaces.push([start, end])
      prevSpace = i
    }
  }
  spaces.push([prevSpace + 1, array.length - 1])
  console.log(spaces)
  for (let i = 0; i < spaces.length; i++) {
    const [start, end] = spaces[i]
    reverse(array, start, end)
  }

  return array
}
