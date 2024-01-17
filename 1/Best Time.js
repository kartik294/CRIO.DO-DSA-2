function bestTimeToBuyAndSellStock(n) {
  let totalProfit = 0;
  n = prices.length;
  for (let i = 0; i < prices.length; i++) {
    totalProfit = prices[i] - prices[i - 1];
    return totalProfit;
  }
}

//leetcode
var maxProfit = function (prices) {
  let minSoFar = prices[0];
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    ans = Math.max(ans, prices[i] - minSoFar);
    minSoFar = Math.min(minSoFar, prices[i]);
  }

  return ans;
};
