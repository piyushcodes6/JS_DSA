/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Bruteforce solution to use all the possible combination to get answers
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let p = i+1; p < nums.length; p++) {
        if(nums[i]+nums[p]===target){
            console.log([i,p]);
            return [i,p]
        }
        }    
    }

};


twoSum([4,1,4],8);