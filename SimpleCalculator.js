let mthExpression = prompt (`Put in Math problem.`);
let checked = inputSanitize (mthExpression);
let result = Calc (checked);

alert (`Result: ${result}`);

function checkAuth (input) {
    const symbolArray = ["+", "-", "*", "/"]
    for (let i = 0; i < input.length; i++) {
        if (symbolArray.includes (input[i])) {
            return true;
        }   
    } return false;
}

function inputSanitize (input) {
    if (checkAuth(input)) {
        return input.replace (/\s/g)
    } else {
        return "Invalid Response!!!"
    }
}

function Calc (input) {
    try {
        return eval(input);
    } catch (error) {
        return "Invalid Response!!!";
    }
}