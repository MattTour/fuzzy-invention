function helloWorld() {
    return 'helloworld';
}

function goodbye() {
    return 'goodbye';
}

export function realCalculator(valueA, valueB, operator) {
    switch (operator) {
        case '+':
            result = valueA + valueB;
            break;
        case '-':
            result = valueA - valueB;
            break;
        case '*':
            result = valueA * valueB;
            break;
        case '/':
            result = valueA / valueB;
            break;
        default:
            result = 'Error, this operator is unknow';
            break;
    }
    return result;
}


export default { helloWorld, goodbye };

