/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 *F(0) = 0, F(1) = 1
 *F(n) = F(n - 1) + F(n - 2), for n > 1.
 *Given n, calculate F(n). 
 * @param {number} n
 * @return {number} 
 */

const isFibonacci=(num)=>{
    // First we have to prepare the array of fibonacci series numbers   
    
    const fibArr=[0,1] // by default 0,1 will be there always

    for (let i = 2; i  <= num ; i++) { // starting the loop from 2 as we have added 0,1 already
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    console.log('Fibonacci Series till num :' + fibArr);
    console.log('Fibonacci number at position num :'+fibArr[num]);
}
/*
 * Using Recursion 
 */
// const isFibonacci=(num)=>{
//     if (num <=1 ) return num;
    
//     return isFibonacci(num -1) + isFibonacci(num -2);
// }


//One liner

// const isFibonacci=(n)=>(n <=1 ? n: isFibonacci(n-1) + isFibonacci(n-2));

isFibonacci(3);
