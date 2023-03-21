function addingEventListener() {
document.getElementById('button'). addEventListener('click', () => alert ('I was clicked'))
}

console.log(addingEventListener());

/*const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}
input.addEventListener('click', clickAlert);*/

document.getElementsByClassName('eventy').addEventListener('form', () => prompt ('To do list'))