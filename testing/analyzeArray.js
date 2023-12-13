// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

function analyzeArray(array) {
	const min = Math.min(...array);
	const max = Math.max(...array);
	const { length } = array;
	const average = array.reduce((acc, curr) => acc + curr) / length;
	return { average, min, max, length };
}

const array = [1, 8, 3, 4, 2, 6];
console.log(analyzeArray(array));

export default analyzeArray;
