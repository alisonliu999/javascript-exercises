function palindromes(str) {
	const string = str.toLowerCase().replace(/[^\w]/g, '');
	const revString = string.split('').reverse().join('');
	return (string === revString);
}
// Do not edit below this line
module.exports = palindromes;
