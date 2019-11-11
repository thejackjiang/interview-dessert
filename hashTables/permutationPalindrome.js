function permutationPalindrome(string) {
  const cache = genCache(string)
  let oddCount = 0
  for (let letter in cache) {
    const occurence = cache[letter]
    if (occurence % 2 === 1) oddCount++
  }
  return !(oddCount > 1)
}

function genCache(string) {
  const cache = {}
  for (let i = 0; i < string.length; i++) {
    const letter = string[i]
    if (cache[letter]) cache[letter]++
    else cache[letter] = 1
  }
  return cache
}

permutationPalindrome('aabcbcd')
