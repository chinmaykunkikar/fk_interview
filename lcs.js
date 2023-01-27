// program to find the longest common substring
// time complexity O(m*n)

function lcs(strA, strB) {
  let lcstr;
  // if both strings equal then lcstr = strA
  if (strA.toLowerCase() === strB.toLowerCase()) lcstr = strA;
  // split strA and strB into array
  let arrA = strA.split();
  let arrB = strB.split();

  // for every element in a check if the current b element matches
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        // how do you store the string?
        lcstr += arrA[i];
      }
    }
  }
  return lcstr;
}

console.log(lcs("car", "carpet"));
console.log(lcs("mamahiedd", "mamfeuodw"));
console.log(lcs("lasjkijwdiw", "sjkjwdiw"));
console.log(lcs("passbook", "passport"));

// test cases
// 1. "mamahiedd" "mamfeuodw" -> "mam"
// 2. "lasjkijwdiw" "sjkjwdiw" -> "jwdiw"
// 3. "car" "carpet" -> "car"
// 4. "passbook" "passport" -> "pass"
