/* eslint-disable no-undef */

import analyzeArray from './analyzeArray';

describe('analyzeArray', () => {
	it('should return min value', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
	});

	it('should return max value', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
	});

	it('should return array length', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
	});

	it('should return average of all array numbers', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
	});
});
