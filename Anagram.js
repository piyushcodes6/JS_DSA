//Ques-3) Valid Anagram
// An Anagram is a word or phase formed by rearranging the letters of a different word or phase, using all the original letters exactly once.

// Input :s('anagram') ,t('nagaram') ==true;
//Input :s('cat'),t('rat') == false;


//1)By sorting both words and then matching them;

// const isAnagram= (s,t)=>{
//     s=s.split('').sort().join('');
//     t=t.split('').sort().join('');
//     return s === t;
// } 

// one liner 
const isAnagram = (s, t) => {
    return s.split('').sort().join('') === t.split('').sort().join('');
}
console.log(isAnagram('anagram', 'nagaram'));