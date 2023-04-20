// acquire functions from stock portfolio
const {StockPortfolio, ShareSaleException} = require('./stock-portfolio-functions.js');

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
  const uniqueShares = 2;

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
    expect(result).toBe(uniqueShares);
  });

  // Test to remove stock from portfolio
  test('Testing sale of share -- success', () => {
    // expect there to only be RBLX shares
    target.makeSale(gamestopTicker, gamestopShares);
    expect(target.stockTickerSymbols).not.toContain(gamestopTicker);
    expect(target.numberOfShares).toBe(robloxShares);
  });

  // Test to see how many shares there are for a specific ticker 
  test('Testing counting how many shares for a symbol -- success', () => {
    // expect there to be 5 gamestop shares
    expect(target.totalSharesPerSymbol(gamestopTicker)).toBe(gamestopShares);
    // expect there to be 10 roblox shares
    expect(target.totalSharesPerSymbol(robloxTicker)).toBe(robloxShares);
  });

  // Test to see that only owned shares are in portfolio
  test('Testing to check only owned shares -- success', () => {
    let result = target.isShareOwned("DOGX"); 
    expect(result).toBe(false);
  });

  // Test to see if exeception is thrown :w
  test('Testing exception for trying to Oversell -- success', () => {
    error = new ShareSaleException();
    const expectedErrorMessage = `Cannot sell 10 shares of ${gamestopTicker} as only 5 shares are owned`;
    // except to not be able to sell  
    expect(() => target.makeSale(gamestopTicker, 10)).toThrowError(new ShareSaleException(expectedErrorMessage));
  });
});


