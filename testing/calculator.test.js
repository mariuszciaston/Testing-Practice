import calculator from './calculator';

describe('calculator', () => {
	test('add', () => {
		expect(calculator.add(1, 2)).toBe(3);
		expect(calculator.add(-1, 2)).toBe(1);
		expect(calculator.add(0, 0)).toBe(0);
		expect(calculator.add(5, 5)).toBe(10);
		expect(calculator.add(2, 3)).toBe(5);
		expect(calculator.add(99, 1)).toBe(100);
		expect(calculator.add(45.5, 4.5)).toBe(50);
	});

	test('subtract', () => {
		expect(calculator.subtract(2, 1)).toBe(1);
		expect(calculator.subtract(-1, 2)).toBe(-3);
		expect(calculator.subtract(0, 0)).toBe(0);
		expect(calculator.subtract(5, 5)).toBe(0);
		expect(calculator.subtract(2, 3)).toBe(-1);
		expect(calculator.subtract(99, 1)).toBe(98);
		expect(calculator.subtract(45.5, 4.5)).toBe(41);
	});

	test('divide', () => {
		expect(calculator.divide(4, 2)).toBe(2);
		expect(calculator.divide(-4, 2)).toBe(-2);
		expect(calculator.divide(5, 5)).toBe(1);
		expect(calculator.divide(2, 3)).toBeCloseTo(0.666);
		expect(calculator.divide(99, 1)).toBe(99);
		expect(calculator.divide(45.5, 4.5)).toBeCloseTo(10.111);
		expect(() => calculator.divide(4, 0)).toThrow('Cannot divide by zero');
	});

	test('multiply', () => {
		expect(calculator.multiply(2, 3)).toBe(6);
		expect(calculator.multiply(-2, 3)).toBe(-6);
		expect(calculator.multiply(0, 3)).toBe(0);
		expect(calculator.multiply(5, 5)).toBe(25);
		expect(calculator.multiply(2, 3)).toBe(6);
		expect(calculator.multiply(99, 1)).toBe(99);
		expect(calculator.multiply(45.5, 4.5)).toBe(204.75);
	});
});
