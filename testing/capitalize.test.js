/* eslint-disable no-undef */

import capitalize from './capitalize';

describe('capitalize', () => {
	it('correctly capitalizes a string', () => {
		expect(capitalize('hello')).toBe('Hello');
		expect(capitalize('WORLD')).toBe('World');
		expect(capitalize('pizza')).toBe('Pizza');
		expect(capitalize('PIZZA')).toBe('Pizza');
		expect(capitalize('PiZzA')).toBe('Pizza');
		expect(capitalize('pIZZA')).toBe('Pizza');
		expect(capitalize('p1zz4')).toBe('P1zz4');
		expect(capitalize('123')).toBe('123');
		expect(capitalize('!@#$%^&*()')).toBe('!@#$%^&*()');
	});

	it('throws an error when non-string is used', () => {
		expect(() => capitalize(123)).toThrow('Not a string');
		expect(() => capitalize(null)).toThrow('Not a string');
		expect(() => capitalize({})).toThrow('Not a string');
		expect(() => capitalize([])).toThrow('Not a string');
	});

	it('should handle a string with only one character', () => {
		expect(capitalize('P')).toBe('P');
		expect(capitalize('p')).toBe('P');
	});

	it('should handle an empty string', () => {
		expect(capitalize('')).toBe('');
	});

	it('should handle a string with only spaces', () => {
		expect(capitalize('   ')).toBe('   ');
	});
});
