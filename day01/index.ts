import {parseInt} from "lodash";

function run1(input: Array<string>) {

    const splittedInput = input.map((input) => input.split(' '))
    let max = 0;
    let total = 0;
    for (const line of splittedInput) {
        if (line[0] !== "") {
            total += parseInt(line[0])
        } else {
            if (max < total) {
                max = total
            }
            total = 0
        }
    }
    console.log(max)
}


function run2(input: Array<string>) {
    let arrayOfNumber: Array<number> = [];
    const splittedInput = input.map((input) => input.split(' '))
    let total = 0;
    for (const line of splittedInput) {
        if (line[0] !== "") {
            total += parseInt(line[0])
        } else {
            arrayOfNumber.push(total)
            total = 0
        }
    }
    const sortedArray = arrayOfNumber.sort((a, b) => b - a)
    const result = sortedArray[0] + sortedArray[1] + sortedArray[2]
    console.log(result)
}

export {run1, run2}

