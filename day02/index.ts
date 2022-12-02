function run1(input: Array<string>) {

    const splittedInput = input.map((input) => input.split(' '))
    let score = 0;
    for (const line of splittedInput){
        switch (line[0]){
            case "A":
                if(line[1]==="X"){
                    score +=3
                }
                if(line[1]==="Y"){
                    score +=6
                }
                break;
            case "B":
                if(line[1]==="Y"){
                    score +=3
                }
                if(line[1]==="Z"){
                    score +=6
                }
                break;
            case "C":
                if(line[1]==="Z"){
                    score +=3
                }
                if(line[1]==="X"){
                    score +=6
                }
                break;
        }
        switch (line[1]){
            case "X":
                score+=1
                break
            case "Y":
                score+=2
                break
            case "Z":
                score+=3
                break
        }
    }
    console.log(score)
}


function run2(input: Array<string>) {
    const splittedInput = input.map((input) => input.split(' '))
    let score = 0;
    for (const line of splittedInput){
        switch (line[1]){
            case "X":
                switch (line[0]) {
                    case "A":
                        score+=3
                        break
                    case "B":
                        score+=1
                        break
                    case "C":
                        score+=2
                        break
                }
                break
            case "Y":
                switch (line[0]) {
                    case "A":
                        score+=1
                        break
                    case "B":
                        score+=2
                        break
                    case "C":
                        score+=3
                        break
                }
                score+=3
                break
            case "Z":
                switch (line[0]) {
                    case "A":
                        score+=2
                        break
                    case "B":
                        score+=3
                        break
                    case "C":
                        score+=1
                        break
                }
                score+=6
                break
        }
    }
    console.log(score)
}

export {run1, run2}

