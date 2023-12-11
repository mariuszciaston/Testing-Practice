/* eslint-disable no-undef */

import capitalize from './capitalize';

test('return string with first character capitalized', () => {
	expect(capitalize('pizza')).toBe('Pizza');
	expect(capitalize('PIZZA')).toBe('Pizza');
	expect(capitalize('PiZzA')).toBe('Pizza');
	expect(capitalize('pIZZA')).toBe('Pizza');
	expect(capitalize('p1zz4')).toBe('P1zz4');
	expect(capitalize('123')).toBe('123');
	expect(capitalize('!@#$%^&*()')).toBe('!@#$%^&*()');
});

test('should handle non string input', () => {
	expect(() => capitalize(123)).toThrow('Not a string');
	expect(() => capitalize({})).toThrow('Not a string');
	expect(() => capitalize([])).toThrow('Not a string');
});

test('should handle a string with only one character', () => {
	expect(capitalize('P')).toBe('P');
	expect(capitalize('p')).toBe('P');
});

test('should handle an empty string', () => {
	expect(capitalize('')).toBe('');
});

test('should handle a string with only spaces', () => {
	expect(capitalize('   ')).toBe('   ');
});
