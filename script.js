let button = document.getElementById('btn');
let colorDesc = document.createElement('h2');
let Upperdiv = document.querySelector('.color');
let color;
let randomColorGenerator = () => {
    const hex = "0123456789ABCDEF";
    color = "#";
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let updateColor = () => {
    colorDesc.innerHTML = randomColorGenerator();
    let Upperdiv = document.querySelector('.color');
    Upperdiv.appendChild(colorDesc);
    document.body.style.backgroundColor = randomColorGenerator();
}

button.addEventListener('click', updateColor);