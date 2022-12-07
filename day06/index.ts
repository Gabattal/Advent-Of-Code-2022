function run1(input: Array<string>) {
    const values: Array<string> = []

    for (let i = 0; i < input[0].length; i++) {
        if (values.length > 3) {
            const multiple = new Set(values).size !== values.length
            if (!multiple) {
                console.log(i)
                break;
            }
            values.shift()
        }
        values.push(input[0][i])
    }
}

function run2(input: Array<string>) {
    const values: Array<string> = []
    for (let i = 0; i < input[0].length; i++) {
        if (values.length > 13) {
            const multiple = new Set(values).size !== values.length
            if (!multiple) {
                console.log(i)
                break;
            }
            values.shift()
        }
        values.push(input[0][i])
    }
}

export {run1, run2}

