let input1 = document.querySelector('#input1');
let show1 = document.querySelector('#show1');
let output1 = document.querySelector('#output1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let show2 = document.querySelector('#show2');
let show3 = document.querySelector('#show3');
let output2 = document.querySelector('#output2');
let calc = document.querySelector(`#calc`);


//Broken code is below. Hint: don't worry about the INNERTEXT method. Those are all working

input1.addEventListener("change", (e) => {
    cubeNumber(e.target.value);
});

calc.addEventListener("click", () => {
    let num = input2.value;
    let pow = input3.value;
    numToPowerOf(num,pow);
})

const cubeNumber = (num) => {
    let cube = num * 3;
    show1.innerText = num;
    output1.innerText = cube;
}

const numToPowerOf = (num,pow) => {
    let result = num;

    for (let x = 0; x < pow; x++) {
        result = result * num;
    }

    show2.innerText = pow;
    show3.innerText = num;
    output2.innerText = result;
}