function isFirstComeFirstServed(takeOut, dineIn, servedOrder){
  let i = 0;
  let j = 0;
  for(let k = 0; k < servedOrder.length; k ++){
      if(takeOut[i] === servedOrder[i]){
      i++
    } else if(dineIn[j] === servedOrder[j]){
      j++
    } else if(takeOut[i] !== servedOrder[i]|| dineIn[j] !== servedOrder[j]){
      return false
    }
  }
  return true
}




