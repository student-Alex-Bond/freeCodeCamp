function checkObj(obj, checkProp) {
  // Only change code below this line
  const animal = {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh"
  }
  let check = obj.hasOwnProperty(checkProp);
  if (check){
    return obj[checkProp]
  }else{
    return 'Not Found'
  }
  
  
  

  // Only change code above this line
}