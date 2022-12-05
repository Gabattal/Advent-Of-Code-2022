import {parseInt} from "lodash";

function compare(line){
    const a1: number[] = []
    const a2: number[] = []

    for(let i = parseInt(line[0][0]); i<=line[0][1]; i++){
        a1.push(i)
    }

    for(let i = parseInt(line[1][0]); i<=line[1][1]; i++){
        a2.push(i)
    }

    if(a1.every(e => a2.includes(e)) || a2.every(e => a1.includes(e))){
        return 1
    }
    return 0
}
function run1(input: Array<string>) {

    const splittedInput = input.map((input) => input.split(','))
    let result =0;
    for (const line of splittedInput){
        const v = line.map((value)=> value.split('-'))
        result +=compare(v)
    }
    console.log(result)
}


function compare2(line){
    const a1: number[] = []
    const a2: number[] = []

    for(let i = parseInt(line[0][0]); i<=line[0][1]; i++){
        a1.push(i)
    }

    for(let i = parseInt(line[1][0]); i<=line[1][1]; i++){
        a2.push(i)
    }

    if(a1.some(r=> a2.includes(r)) || a2.some(r=> a1.includes(r))){
        return 1
    }
    return 0
}
function run2(input: Array<string>) {
    const splittedInput = input.map((input) => input.split(','))
    let result =0;
    for (const line of splittedInput){
        const v = line.map((value)=> value.split('-'))
        result +=compare2(v)
    }
    console.log(result)
}

export {run1, run2}

