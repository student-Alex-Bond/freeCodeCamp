// Setup
function phoneticLookup(val) {
 


  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot":"Frank",
    "": undefined,
  }
  let result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup('charlie');