/**
	* Scrivere una funzione che ricerchi la prima occorrenza di un determinato
	* numero in una serie di numeri ordinati e restituisca un valore booleano
	* true se presente, false altrimenti. Mostrare il risultato in console.
	*
	* La ricerca deve implementare l'algoritmo di ricerca binaria.
	* Esempio -> https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/01125313/image-2.png
	*/

const target = 3;
const array = [2, 5, 8, 9, 10, 12, 15, 16, 17, 19, 20];


function binarySearch(array, target) {

	const mid = Math.floor((array.length) / 2);

	console.log(array[mid]);

	if (target === array[mid]) {
		console.log('TROVATOOOOOO');
		return true;
	} else {
		const left = array.splice(0, mid);
		const right = array;

		if (target < array[mid]) {
			//prenditi la sinistra

		} else {
			//prenditi la destra
		}
	}


}

binarySearch(array, target);
