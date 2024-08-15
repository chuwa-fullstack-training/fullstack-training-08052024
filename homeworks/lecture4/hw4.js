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
  const arr1 = nums1.length < nums2.length ? nums1 : nums2
  const arr2 = arr1 === nums1 ? nums2 : nums1

  const set = new Set(arr1)

  return [...new Set(arr2.filter((num) => set.has(num)))]
}

// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
