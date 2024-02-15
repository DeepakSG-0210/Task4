// let colorChange = document.getElementById("change");

function generateColor() {
    const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexColor = "#";
    for(let i=0; i<6; i++){
        const randomColor = Math.floor(Math.random() * colorArr.length);
        hexColor += colorArr[randomColor];
    }
    console.log(hexColor);
    return hexColor;
}

function colorChange() { 
    const newColor = generateColor();
    let randomBackground = document.getElementById("random");

    randomBackground.style.backgroundColor = newColor;
}