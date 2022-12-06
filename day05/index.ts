import {parseInt} from "lodash";

function run1(input: Array<string>) {
    //console.log(input)

    let currentLineIndex = 0;
    let highestValue = 0;
    let response = ""
    const crates: Array<Array<string>> = []
    const organisedCrates: Array<Array<string>> = []
    while (true) {
        const currentLine = input[currentLineIndex]
        if (currentLine.startsWith(" 1")) {
            currentLineIndex += 2
            break
        }
        const lineLength = (currentLine.length + 1) / 4
        if(lineLength>highestValue){
            highestValue = lineLength
        }
        const crateLine = []
        for (let i = 0; i < lineLength; i++) {
            const value = currentLine[i * 4 + 1]
            crateLine.push(value)
        }
        crates.push(crateLine)
        currentLineIndex++
    }
    for(let i=0; i<highestValue; i++){
        organisedCrates[i] = []
    }
    for(const crate of crates){
        for(let i=0; i<crate.length; i++ ){
            if(crate[i]!=" "){
                organisedCrates[i].push(crate[i])
            }
        }
    }
    //organisedCrates[2][4]='Q'

    while (true) {
        const currentLine = input[currentLineIndex]
        if (!currentLine) {
            break
        }
        const currentLineParsed = currentLine.replaceAll("move", "").replaceAll("from", "").replaceAll("to", "").trim()
        const splitLine = currentLineParsed.split("  ")
        const number = parseInt(splitLine[0])
        const origin = parseInt(splitLine[1])
        const destination = parseInt(splitLine[2])

        for(let i=0; i<number;i++){
            organisedCrates[destination-1].unshift(organisedCrates[origin-1][0])
            organisedCrates[origin-1].shift()

        }
        currentLineIndex++
    }

    for(const array of organisedCrates){
        response += array[0]
    }
    console.log(response)
}

function run2(input: Array<string>) {
    let currentLineIndex = 0;
    let highestValue = 0;
    let response = ""
    const crates: Array<Array<string>> = []
    const organisedCrates: Array<Array<string>> = []
    while (true) {
        const currentLine = input[currentLineIndex]
        if (currentLine.startsWith(" 1")) {
            currentLineIndex += 2
            break
        }
        const lineLength = (currentLine.length + 1) / 4
        if(lineLength>highestValue){
            highestValue = lineLength
        }
        const crateLine = []
        for (let i = 0; i < lineLength; i++) {
            const value = currentLine[i * 4 + 1]
            crateLine.push(value)
        }
        crates.push(crateLine)
        currentLineIndex++
    }
    for(let i=0; i<highestValue; i++){
        organisedCrates[i] = []
    }
    for(const crate of crates){
        for(let i=0; i<crate.length; i++ ){
            if(crate[i]!=" "){
                organisedCrates[i].push(crate[i])
            }
        }
    }
    //organisedCrates[2][4]='Q'

    while (true) {
        const currentLine = input[currentLineIndex]
        if (!currentLine) {
            break
        }
        const currentLineParsed = currentLine.replaceAll("move", "").replaceAll("from", "").replaceAll("to", "").trim()
        const splitLine = currentLineParsed.split("  ")
        const number = parseInt(splitLine[0])
        const origin = parseInt(splitLine[1])
        const destination = parseInt(splitLine[2])

        for(let i=number; i>0;i--){
            organisedCrates[destination-1].unshift(organisedCrates[origin-1][i-1])
            organisedCrates[origin-1].splice(i-1,1)
        }
        currentLineIndex++
    }

    for(const array of organisedCrates){
        response += array[0]
    }
    console.log(response)
}

export {run1, run2}

