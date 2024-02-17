let initialSquareSize = 16;
let containerSize = 500;
resizeSquare(initialSquareSize);

function resizeSquare (size = initialSize) {
  let container = document.querySelector('.container');
  container.style.width = containerSize + 'px';
  container.style.height = containerSize + 'px';
  let numDivs = size ** 2; 

  for(let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.style.height = (100 / size) + '%';
    div.style.width = (100 / size) + '%';
    div.style.backgroundColor = 'white';
    container.appendChild(div);
    
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'red';
    });
  }
}


let button = document.querySelector('button');
button.addEventListener('click', () => {
  let newSize = prompt("What size should the square be? (Max: 100)");
  let container = document.querySelector('.container');
  container.replaceChildren();
  resizeSquare(newSize);
})
