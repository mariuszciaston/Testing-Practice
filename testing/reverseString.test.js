import reverseString from './reverseString';

describe('reverseString', () => {
	it('should correctly reverse a string', () => {
		expect(reverseString('hello')).toBe('olleh');
		expect(reverseString('world')).toBe('dlrow');

		expect(reverseString('abcd')).toBe('dcba');
		expect(reverseString('1234')).toBe('4321');
		expect(reverseString('QWERTYUIOP')).toBe('POIUYTREWQ');
	});

	it('should handle empty strings', () => {
		expect(reverseString('')).toBe('');
	});
});
