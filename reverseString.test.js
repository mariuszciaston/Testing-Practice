import reverseString from './reverseString';

test('should output reversed string', () => {
	expect(reverseString('abcd')).toBe('dcba');
	expect(reverseString('1234')).toBe('4321');
	expect(reverseString('QWERTYUIOP')).toBe('POIUYTREWQ');
});
