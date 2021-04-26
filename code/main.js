let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    
let para = document.createElement('p');

// Add your code here

/*Refactor the code that generates the random number into a separate function called random(), which takes as parameters two generic bounds that the random number should be between, and returns the result.*/

function random(min, max) {
    return num = Math.floor(Math.random() * (max - min));
}

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);