function longestPalindrome(s) {
  let n = s.length
    let start = 0, maxLen = 1;
    let dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n)
        dp[i][i] = true
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            j = i + len - 1;
            if (len === 2) {
                dp[i][j] = (s[i] === s[j])
            } else {
                dp[i][j] =(s[i] === s[j]) && dp[i + 1][j - 1]
            }
            if (len > maxLen && dp[i][j]) {
                start = i;
                maxLen = len;
            }
        }
    }
    return s.substring(start, start + maxLen);
}

module.exports = longestPalindrome;
