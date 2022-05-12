/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/




function isAnagram(x, y) {

	let firstWord = x.split("").sort().join("");
	let secondWord = y.split("").sort().join("");

	if (firstWord === secondWord) {
		console.log(`${x} e ${y} sono anagrammi!`)

	} else {
		console.log(`${x} e ${y} non sono anagrammi!`)
	}

}

isAnagram("gnegne", "spero");