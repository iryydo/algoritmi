/**
	* Scrivere una funzione che conti le ricorrenze dei caratteri all'interno di
	* una parola. La funzione dovrà restituire un'oggetto con chiave la lettera e
	* come valore il conteggio. Mostrare il risultato in console.
	* Esempio
	* countChar("hello") => {h: 1, e: 1, l: 2, o: 1}
	*/

function countOccurrences(x) {

	const word = x.split("");
	console.log(word);
	const occurrences = {};

	//word è ora un array
	word.forEach(element => {
		if (occurrences[element]) {
			occurrences[element]++;
		} else {
			occurrences[element] = 1;
		}
	});

	console.log(occurrences);
}

countOccurrences("rabarbaro");
