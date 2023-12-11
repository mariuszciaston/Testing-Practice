// A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(input) {
	if (typeof input === 'string') {
		return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
	}

	throw new Error('Not a string');
}

export default capitalize;
