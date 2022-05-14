/**
	* Data una stringa, restituire una stringa con i caratteri in ordine inverso.
	* Esempio:
	* reverse("ciao") => "oaic"
	*/


function reverseString(string) {
	console.log(string.split("").reverse().join(""));
}

reverseString("ciao");