/*
  NOTE:
  skipped some edge cases like hyphenated words and words with apostrophies
*/
class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    const arrayOfStrings = stringSplit(inputString)
    for(let i = 0; i < arrayOfStrings.length; i ++){
      const word = arrayOfStrings[i]
      const lowered = word.toLowerCase()
      if(word === '') {
        continue
      } else {
        const caseInsensitiveWord = this.wordsToCounts.has(word) ? word : lowered
        const value = this.wordsToCounts.get(word) || this.wordsToCounts.get(lowered)
        if(value){
          this.wordsToCounts.set(caseInsensitiveWord, value + 1)
        } else {
          this.wordsToCounts.set(word, 1)
        }
      }
    }
  }
}

function stringSplit(string){
  const symbols = ',.-!? '
  const results = []
  let start = 0;
  let iterator = 0
  while(iterator < string.length){
    const letter = string[iterator]
    if(symbols.includes(letter)){
      const slice = string.slice(start, iterator)
      results.push(slice)
      start = iterator + 1
    }
    iterator++
    if(iterator === string.length){
      const slice = string.slice(start, iterator)
      results.push(slice)
    }
  }
  return results;
}
