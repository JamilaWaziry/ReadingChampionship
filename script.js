const compitetors = [
    {
        name:"Sara",
        books:["Who will cry when you die","The 7 habits of highly effective people"],
        tolalPages:[200,300],
        pagesRead:[100,150]
    },
    {
        name:"Hamid",
        books:["The power of now","The art of war"],
        tolalPages:[250,400],
        pagesRead:[50,200]
    },
    {
        name:"Hena",
        books:["Rich dad, Poor dad","The secret"],
        tolalPages:[150,350],
        pagesRead:[75,170]
    },
    {
        name:"Haris",
        books:["Clean Code", "Atomic habits"],
        tolalPages:[300,450],
        pagesRead:[150,300]
    }
]
//console.log(compitetors);
compitetors.forEach(compititor => {
    console.log(`Welcome to the Reading Championship!!! ${compititor.name}`)
});

//functions

//Returns completion % for a single book
function calculateProgress(pagesRead, totalPages) {
    return (pagesRead / totalPages) * 100
}

console.log(calculateProgress(compitetors[1].pagesRead[0], compitetors[0].tolalPages[0]))

// Returns total pages read by a competitor

// function calculateTotalPagesRead(pagesReadArray) {
//     let totalPagesRead = 0;
//     for(let i = 0; i < pagesReadArray.length; i++) {
//         totalPagesRead += pagesReadArray[i];
//     }
//     return totalPagesRead;
// }
function calculateTotalPagesRead(pagesReadArray) {
    let totalPagesRead = 0
    for(let pages of pagesReadArray) {
        totalPagesRead += pages
    }
    return totalPagesRead;
}
console.log(calculateTotalPagesRead(compitetors[2].pagesRead))

//Returns average completion percentage across all books
function calculateCompletionRate(pagesReadArray, totalPagesArray) {
    let totalCompletion = 0
    for(let i = 0; i < pagesReadArray.length; i++) {
       totalCompletion +=calculateProgress(pagesReadArray[i], totalPagesArray[i])
    }
    return Math.round(totalCompletion / pagesReadArray.length)
}
console.log(calculateCompletionRate(compitetors[2].pagesRead, compitetors[2].tolalPages))

function awardPoints(totalPages, completionRate) {
    return totalPages + completionRate *2
}

console.log(awardPoints(calculateTotalPagesRead(compitetors[0].pagesRead), calculateCompletionRate(compitetors[0].pagesRead, compitetors[0].tolalPages)))


//score

let scores = []

for(let i = 0; i < compitetors.length; i++) {
    let person = compitetors[i]
    let totalPages = calculateTotalPagesRead(person.pagesRead);
    let completionRate = calculateCompletionRate(person.pagesRead, person.tolalPages)

    let score = awardPoints(totalPages, completionRate)

    scores.push(score);

    //title
    let title =""
    if (totalPages >= 500){
        title = "Bookworm"
    }
    else if (totalPages >= 350) {
        title = "Reading Star!"
    }
    else if (totalPages >= 150) {
        title = "Dedicated Reader!";
    }
    else {
        title = "Rising Reader!";
    }

    console.log(`${person.name} has read ${totalPages} pages with a completion rate of ${completionRate}%. Total Score: ${score}. Title: ${title}`)
}

//Winner

let highestScore = scores[0];
let winnerIndex = 0
for(let i = 1; i < scores.length; i++) {
    if(scores[i] > highestScore) {
        highestScore = scores[i]
        winnerIndex = i
    }
}

console.log(`The winner of the Reading Championship is ${compitetors[winnerIndex].name} with a score of ${highestScore}! Congratulations!`)


