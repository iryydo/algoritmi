/**
	* Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
	* Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
	* dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
	* mostrare "FizzBuzz".
	*/


function fizzBuzz() {
	for (i = 0; i <= 100; i++) {
		if (i === 0) {
			console.log(i);
		}

		else if (i % 3 === 0) {
			console.log(`Fizz`);
		}

		else if (i % 5 === 0) {
			console.log(`Buzz`);
		}

		else if (i % 3 === 0 && i % 5 === 0) {
			console.log(`FizzBuzz`);
		}

		else {
			console.log(i);
		}
	}

}

fizzBuzz();
