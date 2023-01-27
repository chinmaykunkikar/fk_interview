function twoSum(nums, target) {
  let numDict = {};
  for (let i = 0; i < nums.length; i++) {
    // take a compliment here
    let compliment = target - nums[i];
    // search for compliment in numDict
    if (numDict[compliment] !== undefined)
      // retun array
      return [numDict[compliment], i];
    numDict[nums[i]] = i;
  }
}

console.log(twoSum([2, 4, 5, 6, 7, 9], 11));
