function lengthOfLongestSubstring(s) {
  let start = 0;
    let end = 0;
    let maxLength = 0;
    let substring = new Set();
    while (end < s.length) {
        if(substring.has(s[end])) {
            substring.delete(s[start]);
            start++;
        } else {
            substring.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, end - start)
        }
    }
    return maxLength;
}

module.exports = lengthOfLongestSubstring;
