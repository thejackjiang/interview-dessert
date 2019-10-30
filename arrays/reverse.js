function reverse(array) {
  let i = 0
  let j = array.length

  while(i < j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    i++
    j--
  }
  return array
}
