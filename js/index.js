const initialStockPrice = document.querySelector('.initial-stock-val')
const currentStockPrice = document.querySelector('.current-stock-val')
const stockCount = document.querySelector('.stock-count-val')
const calculate = document.querySelector('.calculate')
const profitStatement = document.querySelector('.profit-statement')
const lossStatement = document.querySelector('.loss-statement')
const stagnantStatement = document.querySelector('.stagnant-statement')

function calculateProfitOrLoss(initialPrice, currentPrice, noOfStocks) {
  let profit = (currentPrice - initialPrice) * noOfStocks
  let profitPercentage = parseFloat((profit/initialPrice) * 100).toFixed(3)
  let loss = (initialPrice - currentPrice) * noOfStocks
  let lossPercentage = parseFloat((loss/initialPrice) * 100).toFixed(3)
  if(initialPrice > currentPrice) {
    profitStatement.innerText = `At present you are at loss by ${loss}. You have accumulated a loss of ${lossPercentage}%`
    profitStatement.classList.remove('hidden')
    profitStatement.classList.add('visible')
  } else if (currentPrice > initialPrice) {
    lossStatement.innerText = `At present you are at profit by ${profit}. You have accumulated a profit of ${profitPercentage}%`
    lossStatement.classList.remove('hidden')
    lossStatement.classList.add('visible')
  } else {
    stagnantStatement.innerText = `At present your stocks show no sign of growth.`
    stagnantStatement.classList.remove('hidden')
    stagnantStatement.classList.add('visible')
  }
}

calculate.addEventListener('click', function() {
  console.log(initialStockPrice.value)
  if((initialStockPrice.value) && (stockCount.value) && (currentStockPrice.value)) {
    calculateProfitOrLoss(Number(initialStockPrice.value), Number(currentStockPrice.value), Number(stockCount.value))
  } else {
    document.querySelector('.input-all').innerText = `Please enter all relavent values`
    document.querySelector('.input-all').classList.remove('hidden')
    document.querySelector('.input-all').classList.add('visible')
    document.querySelector('.input-all').classList.add('fill-all')
  }
})