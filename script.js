const container = document.querySelector('.grid-container');
const cell = [];

function createGrid (squaresPerSide) {
  container.style.gridTemplateColumns = (`repeat(${squaresPerSide}, 1fr)`);
  container.style.gridTemplateRows = (`repeat(${squaresPerSide}, 1fr)`);
  let numberOfCells = squaresPerSide * squaresPerSide;

  for (let i = 0; i < numberOfCells; i++) {
    cell[i] = document.createElement('div');
    cell[i].classList.add('square');

    container.appendChild(cell[i]);
  }
}

createGrid(16);