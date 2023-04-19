class StockPortfolio {
  constructor() {
    this.numberOfShares = 0;
    this.stockTickerSymbols = [];
  }
}

// function to check if shares is empty
StockPortfolio.prototype.hasNoShares = function() {
  return this.numberOfShares == 0;  
}

// function to add Stock to portfolio
StockPortfolio.prototype.addStock = function(stockTicker, numberOfShares) {
  this.numberOfShares += numberOfShares;
  for (let symbolPosition = 0; symbolPosition < numberOfShares; symbolPosition++) {
    this.stockTickerSymbols.push(stockTicker);
  }
}

// function to check number of unique stocks
StockPortfolio.prototype.totalUniqueStocks = function() {
  const unqiueTickers = new Set(this.stockTickerSymbols)  
  return unqiueTickers.size; 
}

// function to represent the sale of stock and update the portfolio
StockPortfolio.prototype.makeSale = function(stockTicker, sharesToSell) {
  this.numberOfShares = this.numberOfShares - sharesToSell;
  this.stockTickerSymbols = this.stockTickerSymbols.filter(item => item !== stockTicker); 
}


// module that exporsts needed
module.exports = StockPortfolio;
