const container = document.createElement('div');
const button = document.createElement('button');
button.textContent = 'Reset';

document.addEventListener('DOMContentLoaded', () =>{
    document.body.appendChild(button);
    container.classList.add('container');
    document.body.appendChild(container);
    for(let j = 0; j < 256; j++){
        let div = document.createElement('div');
        container.appendChild(div);
    }
})
container.addEventListener('mouseover', (event) =>{
    event.target.style.backgroundColor = `rgb(${numColor()},${numColor()},${numColor()})`;
})
button.addEventListener('click', reset)
function reset(){
    do{
        sides = prompt("How many squares do you want per side?");
    } while (sides > 100);
    container.innerHTML = '';
    for(let k = 0; k < sides*sides; k++){
        let div = document.createElement('div');
        container.appendChild(div);
        div.style.height = `calc(500px/${sides})`;
        div.style.width = `calc(500px/${sides})`;
    }

}
function numColor(){
    return Math.floor(Math.random()*256);
}