let btn1 = document.querySelector('#myButton');
let btn2 = document.querySelector('#myButton2');
let codes = '0123456789abcdef';
let copyCode = document.querySelector('.gradient-code-container');
let btnOneCode = ''
let btnTwoCode = '';



const hexCodegenerator = () => {
    let hexcode = '#';
    for (let index = 0; index < 6; index++) {
        hexcode = hexcode + codes[Math.floor(Math.random() * 16)];

    }
    return hexcode;
}
const hexCodeBtnOne = () => {
    btnOneCode=hexCodegenerator();
    btn1.textContent=btnOneCode;
    document.body.style.backgroundImage=`linear-gradient(90deg, ${btnOneCode}, #444)`
    copyCode.textContent=`linear-gradient(90deg, ${btnOneCode}, ${btnTwoCode})`
}

const hexCodeBtnTwo=()=>{
    btnTwoCode=hexCodegenerator();
    btn2.textContent=btnTwoCode;
    document.body.style.backgroundImage=`linear-gradient(90deg ,${btnOneCode}, ${btnTwoCode})`
    copyCode.textContent=`linear-gradient(90deg, ${btnOneCode}, ${btnTwoCode})`
}


const btnOnehexcode = () => hexCodeBtnOne()
const btnTwohexcode = () => hexCodeBtnTwo()
copyCode.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(copyCode.innerHTML);
    alert('copied !');
    
                
            
})

btn1.addEventListener('click', btnOnehexcode);
btn2.addEventListener('click', btnTwohexcode);

