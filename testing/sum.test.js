import sum from './sum';

describe('sum', () => {
	it('correctly adds two numbers', () => {
		expect(sum(1, 2)).toBe(3);
		expect(sum(-1, 2)).toBe(1);
	});

	it('returns NaN when non-numbers are used', () => {
		expect(sum('a', 'b')).toBeNaN();
		expect(sum(null, undefined)).toBeNaN();
	});
});
