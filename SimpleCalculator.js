let num1 = Number(prompt(`Put in num1!`));
let operand = prompt(`Put in the operator`);
let num2 = Number (prompt(`Put in num2!`));

const calc = (num1, operand, num2) => {
    let result;
    switch (operand) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            if (num2 !== 0){
                result = num1/num2;
            } else {
                result = undefined;
            }
            break;
        case "^" || "**":
            result = Math.pow (num1,num2);
            break;
        default:
            result = undefined;
            break;
    }
    return alert (`Result: ${result}`);
}

calc (num1, operand, num2);
