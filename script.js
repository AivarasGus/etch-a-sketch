const gridContainer = document.querySelector('.main-container');
const initButton = document.querySelector('#init-button');
const clearButton = document.querySelector('#clear-button');

init();

function init(){
  createGrid();
  gridContainer.addEventListener("mouseover", changeColor);
  initButton.addEventListener("click", createGrid);
  clearButton.addEventListener("click", createGrid);
}

function getSize(){
  return document.querySelector('.select-container').value;
}

function createGrid(){
  clearGrid();
  gridContainer.style.gridTemplateColumns = setGridProp(getSize());
  gridContainer.style.gridTemplateRows = setGridProp(getSize());
  for(let i = 0; i < getSize() * getSize(); i ++){
    var newDiv = document.createElement('div');
    newDiv.classList.add('inactive');
    gridContainer.appendChild(newDiv);
  }
}

function setGridProp(size){
  var property = "1fr ".repeat(getSize());
  return property;
}

function changeColor(e){
  e.target.classList.add('colored');
}

function clearGrid(){
  gridContainer.innerHTML = '';
}
