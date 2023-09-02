// Ques-4 Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target. 

//Input :nums=[2,7,11,15], target =9
//Output : [0,1](Because nums[0] + nums[1] ==9, so we return [0,1])

//Brute Force Solution to use all the possible combinations to get answers
const twoSum=(nums,target)=>{
    let result=[];
    for (let i = 0; i < nums.length; i++) {
        for (let p = i+1; p < nums.length; p++) {
            console.log('i :'+i );
            console.log('p :'+p);
            if(nums[i] + nums[p] ===target) result.push(i,p);
        }
    }

    console.log(result)
}

// twoSum([2,7,11,15],9)
twoSum([3,2,3],6)