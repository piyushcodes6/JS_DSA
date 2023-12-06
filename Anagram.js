/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


//By sorting both words and then matching them;

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