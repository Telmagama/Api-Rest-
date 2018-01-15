const _= require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função middleware
function getSummary(req, res) {
  BillingCycle.aggregate({
    $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
  }, {

  })
}
