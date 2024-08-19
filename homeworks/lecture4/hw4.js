/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  // Your solution here
  ans = new Set();
  for(i= 0; i < nums1.length; i++) {
    for(j= 0; j < nums2.length; j++) {
      if(nums1[i] === nums2[j]) {
        ans.add(nums1[i]);
      }
    }
  }
  return Array.from(ans);

};

console.log(intersection([1,2,2,1], [2,2]));      //[ 2 ]
console.log(intersection([4,9,5], [9,4,9,8,4]));  //[ 4, 9 ]


