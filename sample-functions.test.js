const myFunctions = require('./sample-functions.js');

// Test for sum function
test('Testing sum -- success', () => {
	const target = 30;
	const result = myFunctions.sum(12,18);
	expect(target).toBe(result);
});

// Tests for div function
test('Testing div -- success', () => {
	const target = 5;
	const result = myFunctions.div(30, 6);
	expect(target).toBe(result);
});

test('Test div for 0 divsor -- sucess', () => {
	const result = myFunctions.div(5, 0);
	expect(isFinite(result)).toBe(false);
});


// Tests for containsNumber function
test('Testing containsNumber -- success', () => {
	const result = myFunctions.containsNumbers("dogs123");
	const result2 = myFunctions.containsNumbers("123");
	expect(result).toBe(true);
	expect(result2).toBe(true);
})

test('Testing containsNumber -- success', () => {
	const result = myFunctions.containsNumbers("dogs");
	expect(result).toBe(false);
})
