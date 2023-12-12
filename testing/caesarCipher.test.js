/* eslint-disable no-undef */

import caesarCipher from './caesarCipher';

describe('caesarCipher', () => {
	it('should return each character shifted', () => {
		expect(caesarCipher('abcd', 1)).toBe('bcde');
		expect(caesarCipher('abcd', 2)).toBe('cdef');
		expect(caesarCipher('abcd', 3)).toBe('defg');
		expect(caesarCipher('abcd', 4)).toBe('efgh');
		expect(caesarCipher('abcd', 5)).toBe('fghi');
		expect(caesarCipher('yzab', 1)).toBe('zabc');
	});

	it('should wrap form z to a', () => {
		expect(caesarCipher('z', 1)).toBe('a');
		expect(caesarCipher('z', 3)).toBe('c');
	});

	it('should keep the same case', () => {
		expect(caesarCipher('a', 1)).toBe('b');
		expect(caesarCipher('A', 1)).toBe('B');
		expect(caesarCipher('Z', 9)).toBe('I');
	});

	it('should keep empty spaces', () => {
		expect(caesarCipher('ala ma kota', 0)).toBe('ala ma kota');
	});

	it('should keep punctuation and numbers', () => {
		expect(caesarCipher('abc!', 1)).toBe('bcd!');
		expect(caesarCipher('@#$', 1)).toBe('@#$');
	});
});
