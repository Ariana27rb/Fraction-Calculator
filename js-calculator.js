var params = process.argv.slice(2)

if (params.length < 2) {
  console.log('Please type two parameters \n')
  return
}
var m = parseFloat(params[0], 10)
var n = parseFloat(params[1], 10)
console.log('\n Addition: ', m + n)
console.log('\n Subtraction: ', m - n)
console.log('\n Division: ', m / n)
console.log('\n Multiplication: ', m * n)
console.log('\n Exponent: ', Math.pow(m, n))
console.log('\n Radical: ', Math.pow(m, 1 / n), '\n')
