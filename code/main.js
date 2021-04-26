let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    
let para = document.createElement('p');

// Add your code here

/*Refactor the code that generates the random number into a separate function called random(), which takes as parameters two generic bounds that the random number should be between, and returns the result.*/

function random(min, max) {
    return num = Math.floor(Math.random() * (max - min));
}

/*Update the chooseName() function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.*/

function chooseName(array) {
    return randomName = array[random(0, array.length)];
}

/*Print the returned result into the paragraph (para)'s textContent.*/

para.textContent = chooseName(names);

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);