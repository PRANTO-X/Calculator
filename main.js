let btns=document.querySelectorAll('button');
let display=document.querySelector(".display");

let string = "";


const number = (e)=>{
    string += e;
    display.value = string;
};

const calculate = () => {
    try {
        let result = eval(string.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1} * Math.PI / 180)`)
                                .replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1} * Math.PI / 180)`)
                                .replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1} * Math.PI / 180)`)
                                .replace(/log/g, "Math.log")
                                .replace(/√/g, "Math.sqrt")
                                .replace(/²/g, "**2")
                                .replace(/\^/g, "**")
                                .replace(/÷/g,"/")
                                .replace(/×/g,"*"));
        display.value = result;
        string = "";
    } catch (error) {
        display.value = "Error!";
        string = ""; 
    }
};

const backSpace = ()=>{
    string = string.substring(0,string.length-1);
    display.value = string;
};

const allClear = ()=>{
    string = "";
    display.value = string;
};