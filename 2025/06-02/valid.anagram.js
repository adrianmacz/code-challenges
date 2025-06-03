Valid Anagram
Solved 
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        let map = {};

        for(let i = 0; i < s.length; i++){
            let letter = s[i];

            if(!map[letter]){
                map[letter] = 1;
            } else {
                map[letter]++
            }
        }
        for(let i = 0; i< t.length; i++){
            let letter = t[i];
            
            if(map[letter] === undefined){
                return false;
            } if (map[letter] < 1){
                return false
            }
            map[letter]--
        }
          return true;
    }
  
}