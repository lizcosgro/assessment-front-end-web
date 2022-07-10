// profile.js

console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();

	alert("Thanks for the feedback!");
}

let form = document.querySelector('#contact');



form.addEventListener('submit', handleSubmit);

color.addEventListener("click", function(){alert("Pink");
});

place.addEventListener("click", function(){alert("My house");
});

ritual.addEventListener("click", function(){alert("Sleeping");
});