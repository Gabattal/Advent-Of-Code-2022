function run1(input: Array<string>) {
    const splittedInput = input.map((input) => input.split(' '))
    let result = 0;
    for (const line of splittedInput){
        const med = Math.round(line[0].length/2)
        const l1 = line[0].slice(0,med)
        const l2 = line[0].slice(med,line[0].length)
        for(const c of l1){
            if(l2.includes(c)){
                if(c===c.toUpperCase()){
                    result+=c.charCodeAt(0)-38
                } else {
                    result+=c.charCodeAt(0)-96
                }
                break
            }
        }
    }
    console.log(result)
}


function run2(input: Array<string>) {
    const splittedInput = input.map((input) => input.split(' '))
    let result = 0;
    for(let i=0; i< splittedInput.length; i+=3){
        const r = splittedInput.slice(i,i+3)

        for (const c of r[0][0]){
            if(r[1][0].includes(c) && r[2][0].includes(c)){
                if(c===c.toUpperCase()){
                    result+=c.charCodeAt(0)-38
                } else {
                    result+=c.charCodeAt(0)-96
                }
                break
            }
        }
    }
    console.log(result)
}

export {run1, run2}

