//your JS code here. If required.
let counter = 0;
let P = document.querySelector('#counter')
let btn = document.querySelector('#incrementBtn')
P.innerHTML = counter;
btn.addEventListener('click', ()=>{
		counter+=1;
	alert(`current count ${counter}`)
	P.innerHTML = counter;
})