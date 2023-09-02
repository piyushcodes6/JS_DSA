// Ques-2) Fibonacci Number
// Fibonacci Series= 0,1,1,2,3,5,8,13......
// Formula is F(0)=0, F(1)=1 --- because 0,1 is by default
// F(n)=F(n-1) + F(n- 2), for n>1

// const isFibonacci=(num)=>{
//     // First we have to prepare the array of fibonacci series numbers   
    
//     const fibArr=[0,1] // by default 0,1 will be there always

//     for (let i = 2; i  <= num ; i++) { // starting the loop from 2 as we have added 0,1 already
//         fibArr.push(fibArr[i-1]+fibArr[i-2]);
//     }
//     console.log(fibArr[num]);
// }



//Using Recursion

// const isFibonacci=(num)=>{
//     if (num <=1 ) return num;
    
//     return isFibonacci(num -1) + isFibonacci(num -2);
// }

//One liner

const isFibonacci=(n)=>(n <=1 ? n: isFibonacci(n-1) + isFibonacci(n-2));

console.log(isFibonacci(3));
