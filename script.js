//your JS code here. If required.
let counter = 0;
let P = document.querySelector('#counter')
P.innerHTML = counter;
function incrementCounter() {
	counter+=1;
	P.innerHTML = counter;
}