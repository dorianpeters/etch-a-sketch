let initialSize = 16;
resizeSquare(initialSize);

function resizeSquare (size = initialSize) {
  let totalSize = size * 10;
  let container = document.querySelector('.container');
  container.style.width = totalSize + 'px';
  container.style.height = totalSize + 'px';

  for(let i = 0; i < size ** 2; i++) {
    let div = document.createElement('div');
    div.style.height = '8px';
    div.style.width = '8px';
    div.style.backgroundColor = 'white';
    div.style.border = 'thin solid blue';
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
