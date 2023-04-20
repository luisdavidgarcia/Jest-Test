class StockPortfolio {
  constructor() {
    this.numberOfShares = 0;
    this.stockTickerSymbols = [];
    this.tableOfStocks = {};
  }
}

class ShareSaleException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ShareSaleException';
  }
}

// function to check if shares is empty
StockPortfolio.prototype.hasNoShares = function() {
  return this.numberOfShares == 0;  
}

// function to add Stock to portfolio
StockPortfolio.prototype.addStock = function(stockTicker, numberOfShares) {
  this.numberOfShares += numberOfShares;
  this.tableOfStocks[stockTicker] = numberOfShares;
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
  const actualNumberOfStocks = this.stockTickerSymbols.filter(item => item === stockTicker).length; 

  if (sharesToSell > actualNumberOfStocks) {
    throw new ShareSaleException(`Cannot sell ${sharesToSell} shares of ${stockTicker} as only ${actualNumberOfStocks} shares are owned`);
  } 
  else {
    this.numberOfShares = this.numberOfShares - sharesToSell;
    this.stockTickerSymbols = this.stockTickerSymbols.filter(item => item !== stockTicker);
    if (actualNumberOfStocks === sharesToSell) {
      delete this.tableOfStocks.stockTicker;
    }
    else {
      this.tableOfStocks[stockTicker] -= sharesToSell;
    }

  }
}

// function to check number of shares for a symbol
StockPortfolio.prototype.totalSharesPerSymbol = function(stockSymbol) {
  return this.stockTickerSymbols.filter(item => item === stockSymbol).length;
}

// function to check if a share is owned
StockPortfolio.prototype.isShareOwned = function(stockSymbol) {
  let result = this.tableOfStocks[stockSymbol];
  if (result !== undefined) {
    return true;
  }
  else {
    return false;
  }
}

// module that exporsts needed
module.exports = {StockPortfolio, ShareSaleException};
