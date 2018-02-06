let filterInput = document.getElementById('filterInput');

// add event listener, when user releases key, do filterNames function
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	// get the value of the input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	console.log(filterValue);
	// get names ul
	let ul = document.getElementById('names');

	// get lis from ul into an array, using selector func to get li based on class names
	let li = ul.querySelectorAll('li.collection-item');

	// loop through li array
	for(let i = 0; i < li.length; i++){
		// using getElementsByTagName to get a tag elements
		let a = li[i].getElementsByTagName('a')[0];
		// if matched, grabbing names from a tag with innerHTML for comaprison
		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
		}else{
			li[i].style.display = 'none';
		}
	}
}