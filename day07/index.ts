import {parseInt} from "lodash";

function run1(input: Array<string>) {
    let result = 0
    let directories: any[] = []
    let map = new Map()
    for (const line of input) {
        if (line.startsWith('$ cd')) {
            const command = line.substring(5)
            if (command === "..") {
                directories.pop()
            } else {
                directories.push(command)
            }
        }
        if (!isNaN(parseInt(line[0]))) {
            const number = line.split(' ')
            let key = ""
            for (let i = 0; i < directories.length; i++) {
                key += directories[i]
                let totalNumber = parseInt(number[0])
                if (map.get(key)) {
                    totalNumber += parseInt(map.get(key))
                }
                map.set(key, totalNumber)
            }
        }
    }
    for (const value of map) {
        if (value[1] <= 100000) {
            result += value[1]
        }
    }
    console.log(result)
}

function run2(input: Array<string>) {
    let result = 0
    const spaceNeeded = 30000000
    let spaceAvailable = 70000000
    let directories: any[] = []
    let map = new Map()
    for (const line of input) {
        if (line.startsWith('$ cd')) {
            const command = line.substring(5)
            if (command === "..") {
                directories.pop()
            } else {
                directories.push(command)
            }
        }
        if (!isNaN(parseInt(line[0]))) {
            const number = line.split(' ')
            let key = ""
            for (let i = 0; i < directories.length; i++) {
                key += directories[i]
                let totalNumber = parseInt(number[0])
                if (map.get(key)) {
                    totalNumber += parseInt(map.get(key))
                }
                map.set(key, totalNumber)
            }
        }
    }
    spaceAvailable -= map.get('/')
    for (const value of map) {
        const differenceResult = Math.abs(result - spaceNeeded)
        const differenceValue = Math.abs((spaceAvailable + value[1]) - spaceNeeded)
        if (spaceAvailable + value[1] >= spaceNeeded && differenceValue < differenceResult) {
            result = value[1]
        }
    }
    console.log(result)
}

export {run1, run2}

