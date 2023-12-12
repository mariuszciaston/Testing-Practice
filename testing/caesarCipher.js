// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

function caesarCipher(str, shiftFactor) {
	const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	const firstHalf = alphabetArray.slice(0, shiftFactor);
	const secondHalf = alphabetArray.slice(shiftFactor, alphabetArray.lenght);
	const cipherArray = secondHalf.concat(firstHalf);
	const strArray = str.split('');

	let newStr = '';
	const regex = /[^a-zA-Z\s]/;

	strArray.forEach((element) => {
		if (regex.test(element)) {
			newStr += element;
		} else if (element === ' ') {
			newStr += ' ';
		} else {
			const isUpperCase = element === element.toUpperCase();
			const normalizedElement = isUpperCase ? element.toLowerCase() : element;
			const index = alphabetArray.indexOf(normalizedElement);
			const cipherElement = cipherArray[index];
			newStr += isUpperCase ? cipherElement.toUpperCase() : cipherElement;
		}
	});

	return newStr;
}

export default caesarCipher;
