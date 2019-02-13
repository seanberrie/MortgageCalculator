var apr
var term
var loan
var payment

window.onload = function() {
  document.getElementById("submit").onclick = calcMort
}

function calcMort () {
  apr = document.getElementById("apr").value
  term = document.getElementById("term").value
  loan = document.getElementById("loan").value
  /// this is turning the apr from a percentage to a decimal
  apr = apr/12/100
  /// we request users term years and this convert this to months
  term = term * 12
  /// this calls on the calcMntPym function to return a monthly payment amount
  payment = calculateMonthlyPayment()
  /// this takes the returned value and puts the response in as USD value rounded to the nearest whole dollar
  document.getElementById("payment").value = `\$ ${Math.round(payment)}`
}

function calculateMonthlyPayment() {
  var monthlyPayment = loan * (apr * Math.pow((1+ apr), term)) / (Math.pow((1 + apr), term) -1);
      return monthlyPayment
}

