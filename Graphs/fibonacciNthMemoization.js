const arr = [1, 1, 2, 3, 5, 8, 13]
const fibonacci = (number, memo = {}) => {
  if (number in memo) {
    return memo[number]
  }
  if (number <= 2) {
    return 1
  }
  memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo)
  console.log(memo)
  return memo[number]
}
console.log(fibonacci(60))