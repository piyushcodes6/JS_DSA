// Ques-1) A plindorme number is a number which when reads is the same forward and backward 

// for example 121,999

const isPlindrome=(num)=>{
    console.time('Time taken');
    const numToStr=`${num}`;
    const reverseNum=numToStr.split('').reverse().join('');
    if(numToStr===reverseNum){
        console.log(`${num} is a Plindrome Number`);
    }else{
        console.log(`${num} is not a Plindrome Number`);
    }
    console.timeEnd('Time taken');

}

isPlindrome(121);