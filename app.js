let squareSize = 16;
let totalSize = squareSize * 10;
let container = document.querySelector('.container');
container.style.width = totalSize + 'px';
container.style.height = totalSize + 'px';

for(let i = 0; i < squareSize ** 2; i++) {
  let div = document.createElement('div');
  div.style.height = '8px';
  div.style.width = '8px';
  div.style.backgroundColor = 'white';
  div.style.border = 'thin solid blue';
  container.appendChild(div);
  
  // Event listener not working
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'red';
  });
}
