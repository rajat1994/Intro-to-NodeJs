const sum = require('./Utility.js')
let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance = sum([checkingAccountBalance,savingsAccountBalance,retirementAccountBalance])
//let totalBalance = sum([11,12])
console.log(totalBalance)
