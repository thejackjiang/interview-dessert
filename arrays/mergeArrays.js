function mergeArrays(arr1, arr2) {
  let i = 0
  let j = 0
  const results = []
  while(i < arr1.length || j < arr2.length ){
    const ele1 = arr1[i]
    const ele2 = arr2[j]

    if(ele1 < ele2) {
      results.push(ele1)
      i++
    } else {
      results.push(ele2)
      j++
    }
  }
  return results

}
