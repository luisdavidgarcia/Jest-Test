// acquire functions from stock portfolio
const StockPortfolio = require('./stock-portfolio-functions.js');

describe('Testing Class Creation', () => {
  let target;

  // create a new instance of stock portfolio
  beforeEach(() => {
    target = new StockPortfolio();
  });

  // Test ability to create portfolio
  test('Testing Portfolio Creation -- success', () => {
    expect(target).toBeInstanceOf(StockPortfolio);
  });

  // Test that constructor has empty shares
  test('Testing for Empty Shares -- success', () => {
    // After constructor check that shares is empty
    expect(target.hasNoShares()).toBe(true);
  });
});

describe('Tests regarding adding/removing stock', () => {
  let target;
  const robloxTicker = "RBLX";
  const robloxShares = 10;
  const gamestopTicker = "GME";
  const gamestopShares = 5;

  // populate portfolio to have 5 "GME" and 10 "RBLX" shares
  beforeEach(() => {
    target = new StockPortfolio();
    target.addStock(gamestopTicker, gamestopShares);
    target.addStock(robloxTicker, robloxShares);
  });

  // Test to update numberOfShares and tickerArray 
  test('Testing adding a Ticker and Share', () => {
    expect(target.stockTickerSymbols).toContain(robloxTicker, gamestopTicker);
  });

  // Test to see if unquie number of stocks works
  test('Testing for Unique Shares -- success', () => {
    // expect a result of 2 since only "GME" and "RBLX"
    let result = target.totalUniqueStocks();
    expect(result).toBe(2);
  });

  // Test to remove stock from portfolio
  test('Testing sale of share -- success', () => {
    // expect there to only be RBLX shares
    target.makeSale(gamestopTicker, gamestopShares);
    expect(target.stockTickerSymbols).not.toContain(gamestopTicker);
    expect(target.numberOfShares).toBe(10);
  });
});


