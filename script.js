document.addEventListener('DOMContentLoaded', () =>{
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    for(let j = 0; j < 256; j++){
        let div = document.createElement('div');
        container.appendChild(div);
    }
})

