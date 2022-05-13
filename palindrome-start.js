/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/

function isPalindrome(word) {
	let wordArray = word.split("");

	let halfArray = Math.floor(wordArray.length / 2);

	let firstHalf = wordArray.slice(0, halfArray);
	console.log(firstHalf);
	let secondHalf = wordArray.slice(halfArray, wordArray.length);
	console.log(secondHalf);


	let i = 0;
	j = secondHalf.length - 1;
	let isPalindrome = true;

	while (i <= j) {

		if (firstHalf[i] !== secondHalf[j]) {
			isPalindrome = false;
			break
		}

		i++;
		j--;
	}
	if (isPalindrome) {
		console.log(`${word} è un palindromo!`);
	} else {
		console.log(`${word} non è un palindromo!`);
	}
}

isPalindrome("anna");