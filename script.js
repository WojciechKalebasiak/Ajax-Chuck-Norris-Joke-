var url = 'http://api.icndb.com/jokes/random';
var jokebutton = document.getElementById('get-joke');
jokebutton.addEventListener('click', function () {
	getJoke();
});
getJoke();
function getJoke () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onreadystatechange = function () {
		if(xhr.status === 200) {
			var response = xhr.response;
			response = JSON.parse(response);
			document.getElementById('joke').innerHTML = response.value.joke;
		}
	};//end of event handler
	xhr.send();
}//end of getJoke