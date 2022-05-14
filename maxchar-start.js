/**
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/


function getMaxOccurChar(word) {
	occurrences = {};

	for (let i = 0; i < word.length; i++) {
		if (occurrences[word[i]])
			occurrences[word[i]]++;
		else
			occurrences[word[i]] = 1;
	}

	let charMaxOcc = "";
	let maxOcc = 0;
	for (let i = 0; i < word.length; i++) {
		let tempMax = maxOcc;
		maxOcc = Math.max(maxOcc, occurrences[word[i]]);
		if (tempMax !== maxOcc) {
			charMaxOcc = word[i];
		}
	}

	console.log(charMaxOcc);

	return charMaxOcc;
}

const word = 'kamehameha';
getMaxOccurChar(word);
