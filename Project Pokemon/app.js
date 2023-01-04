/*================================ 
GOTTA CATCH THEM ALL - POKEMON!!!
==================================

Objective
---------
Get all 151 pokemons displayed on the homepage.
You can see the result by looking at result-Pokemon.png which is provided in the project folder.

Materials/files Provided:
-------------------------
index.html !You are not allowed to modify this file
App.css    !You are not allowed to modify this file
Folder named 'Pokemon' -> contains all the pokemon images that you need to display.
result-Pokemon.png
App.js

You are only allowed to work inside of App.js

Steps required to achieve the result
------------------------------------

1: Select the id container and assign it to the variable 'container'
-> Hint: use querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
-> This is where all the images will be generated

2: Create a for loop that goes through all the images
-> Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
-> Hint: I only wish the see the orignal pokemons, 151 in total

3: Inside of the for loop:
	 3.1: create an img element -> asign this to a variable called newImg
	 Hint: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 	 3.2 The image 'src' attribute should receive a link to the pokemon image
 	 Hint: newImg.src = 'filepath'
 	 Hint: Notice the the images inside of the folders have received 'numbers as filenames.
	       with the for loop, you can use the index to loop through the images
 	 3.3: Append the image inside the container variable
 	 Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/append



*/



const container = document.querySelector("#container");

for (let i = 1; i <= 151; i++) {
 // const pokemon = document.createElement("section");
 // const label = document.createElement("span");
 // label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `./pokemon/${[i]}.png`;
 // pokemon.appendChild(newImg);
 // pokemon.appendChild(label);
 // pokemon.classList.add("pokemon");
  container.appendChild(newImg);
}
