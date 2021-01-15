// --------------------------
// Opdracht 1
// --------------------------

let names = ["Henk", "Piet", "Fred", "Joop"];

// Verander de waardes van de array dusdanig dat er -"je" achter iedere naam wordt geplakt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

for (let i = 0; i < names.length; i++) {
    names[i] += "je";
}
console.log(names);

// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];

// Verander de waardes van de array dusdanig dat iedere waarde met 3 vermenigvuldigd wordt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 3;
}
console.log(numbers);

// --------------------------
// Opdracht 3
// --------------------------

const figures = [4, 6, 12, 34, 1];

// Verander de waardes van de array dusdanig dat er 3 bij iedere waarde wordt opgetelt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(figures) geeft: [ 7, 9, 15, 37, 4 ]

for (let i = 0; i < figures.length; i++) {
    figures[i] += 3;
}

console.log(figures);
