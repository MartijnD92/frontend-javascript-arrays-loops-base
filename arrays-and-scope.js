
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// --------------------------
// Opdracht 1: Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// verwacht antwoord: 6
// --------------------------

let cumLaude = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 7) {
        cumLaude++;
    }
}
console.log("opdracht 1: " + cumLaude);


// OF WAT OOK WERKT:

const highestScore = grades.filter(x => x > 7);
console.log(highestScore);
console.log("opdracht 1b: " + highestScore.length);

// --------------------------
// Opdracht 2: Check welke waarde in de array het hoogste is, en log dit in de console
// verwacht antwoord: 9
// --------------------------

let temp = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > temp) {
        temp = grades[i];
    }
}
console.log("opdracht 2: " + temp);

// WAT OOK WERKT:

const highScore = Math.max(...grades);
console.log("opdracht 2b: " + highScore);

// --------------------------
// Opdracht 3: Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// verwacht antwoord: 6.642857142857143
// --------------------------

let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
let mean = sum / grades.length;
console.log(mean)

// WAT OOK WERKT:

let mean2 = grades.reduce((a, b) => (a + b)) / grades.length;
console.log(mean2);


