/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *  
 * @param {number} x
 * @return {boolean}
 */


const isPlindrome=(num)=>{
    const numToStr=`${num}`;
    const reverseNum=numToStr.split('').reverse().join('');
    if(numToStr===reverseNum){
        console.log(true);
       return true;
    }else{
        console.log(false);
        return false;
    }

}

isPlindrome(233);