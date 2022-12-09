function compare(array: Array<string>, y: number, x: number) {
    let validate = true;
    if (array[y][x] > array[y + 1][x]) {
        for (let i = y + 1; i < array.length; i++) {
            if (array[y][x] <= array[i][x]) {
                validate = false
            }
        }
        if (validate) {
            return 1
        }
    }
    validate = true
    if (array[y][x] > array[y - 1][x]) {
        for (let i = y - 1; i >= 0; i--) {
            if (array[y][x] <= array[i][x]) {
                validate = false
            }
        }
        if (validate) {
            return 1
        }
    }
    validate = true
    if (array[y][x] > array[y][x + 1]) {
        for (let i = x + 1; i < array.length; i++) {
            if (array[y][x] <= array[y][i]) {
                validate = false
            }
        }
        if (validate) {
            return 1
        }
    }
    validate = true
    if (array[y][x] > array[y][x - 1]) {
        for (let i = x - 1; i >= 0; i--) {
            if (array[y][x] <= array[y][i]) {
                validate = false
            }
        }
        if (validate) {
            return 1
        }
    }
    return 0
}

function run1(input: Array<string>) {
    const totalEdge = input.length * 2 + (input[0].length - 2) * 2
    let totalInterior = 0;
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[0].length - 1; j++) {
            totalInterior += compare(input, i, j)
        }
    }

    const result = totalInterior + totalEdge
    console.log(result)
}

function compare2(array: Array<string>, y: number, x: number) {
    let validate = true;
    let up = 0
    let left = 0
    let right = 0
    let down = 0
    if (array[y][x] > array[y + 1][x]) {
        for (let i = y + 1; i < array.length; i++) {
            if (array[y][x] > array[i][x]) {
                down++
            } else {
                down++
                break
            }
        }
    }
    if (array[y][x] > array[y - 1][x]) {
        for (let i = y - 1; i >= 0; i--) {
            if (array[y][x] > array[i][x]) {
                up++
            } else {
                up++
                break
            }
        }
    }
    if (array[y][x] > array[y][x + 1]) {
        for (let i = x + 1; i < array.length; i++) {
            if (array[y][x] > array[y][i]) {
                right++
            } else {
                right++
                break
            }
        }
    }
    if (array[y][x] > array[y][x - 1]) {
        for (let i = x - 1; i >= 0; i--) {
            if (array[y][x] > array[y][i]) {
                left++
            } else {
                left++
                break
            }
        }
    }
    up === 0 ? up = 1 : null
    down === 0 ? down = 1 : null
    left === 0 ? left = 1 : null
    right === 0 ? right = 1 : null

    return up * down * left * right
}

function run2(input: Array<string>) {
    let total = 0
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[0].length - 1; j++) {
            if (total < compare2(input, i, j)) {
                total = compare2(input, i, j)
            }
        }
    }

    console.log(total)

}

export {run1, run2}

