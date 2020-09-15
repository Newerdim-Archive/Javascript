// -------- Zmienne i stałe -------- //

/* 
    Zmienna tworzymy:
        typ nazwa = wartość

    Zmienne mogą mieć różne typy np.
        napis: 'tekst',
        liczba: 3,
        warunek: true/false,
        objekt: { imie: 'Jan', wiek: 18 },
        funckcja: function sum(a, b) { return a + b},
        tablica: [1, 5, 6, 2, 3],
        klasy: new Persone()
*/

// Zmienna globalna. Można jej użyć w całym dokumencie. Nie polecam używać.
var zmiennaGlobalna = 0;

// Zmienna lokalna. Nie będzię dostępna np. poza funkcją.
let zmiennaLokalna = 'Polecam używać.';

// Stała. Nie można zmienić jej wartości po utworzeniu.
const stala = 3.14;
// stala = 14; próba przypisanania nowej wartości skończy się błedem

// -------- Tablice -------- //

/* 
    Składnia:
        typ nazwa = [wartość1, wartość2, wartość3];
*/

let tablicaLiczb = [1, 2, 3, 4];
let tablicaZwierzat = ['Pies', 'Kot', 'Mysz'];
let tablicaMieszana = ['Pies', 2, 'Banan', true];
let pustaTablica = new Array(10); // Pusta tablica 10-cio elementowa

let dlugoscTablicy = tablicaLiczb.length; // .lenght zwraca ilość elementów

// pobranie elementu według indeksu
// tablica[indeks];
console.log(tablicaLiczb[0]);

// zmiana wartości elementu w tablicy
// tablica[indeks] = 10;
tablicaZwierzat[0] = 'Piesek';
console.log(tablicaZwierzat); // ['Piesek', 'Kot', 'Mysz']

// dodawanie elementu na końcu tablicy
var nowaTablica = tablicaLiczb.push(5);
console.log(nowaTablica); // [1, 2, 3, 4, 5];

// usuwanie elemetu z końca tablicy
var ostatniElement = tablicaLiczb.pop(); // usuwa ostatni element
console.log(ostatniElement); // 5

// usuwanie elementu z przodu tablicy
var pierwszyElement = tablicaLiczb.shift(); // usuwa pierwszy element
console.log(pierwszyElement); // 1

// dodawanie elementu z przodu tablicy
var nowaTablica = tablicaLiczb.unshift(1) // dodaje element na początku
console.log(nowaTablica); // [1, 2, 3, 4]

// znajdowanie indeksu (numeru porządkowego) elementu t tablicy
var indeks = tablicaLiczb.indexOf(3);
console.log(indeks); // 2 bo tablica zaczyna się od 0

// usuwanie obiektu przy użyciu indeksu
// tablica.splice(indeks, ilośćElementow);
var usunietyElement = tablicaLiczb.splice(indeks, 1);

// -------- Okna dialogowe i konsola -------- //

// Wyświetlenie objektu, zmiennej lub tekstu w konsoli (F12 w przeglądarce)
// console.log(objekt);
console.log('Wiadomość');

// Okienko z pole do wpisania tesktu. Zwraca wiadomość wpisaną przez użytkownika
// prompt(wiadomość); 
let imie = prompt('Podaj imię');
console.log(imie); // Imię wpisane przez użytkownika

// Okienko z przyciskiem Ok i Anuluj. Zwraca true lub false
// confirm(wiadomość);
let kontynuuj = confirm('Czy chcesz kontynuować?');
console.log(kontynuuj); // True lub False zależy co zostało wciśnięte

// Okienko ostrzegawcze. Nic nie zwraca
// alert(wiadomość);
alert('Uwaga');

// -------- Operatory arytmetyczne -------- //
/*
    Streszczenie:
        przypisanie: =
        dodawnie: +
        zwiększnie o 1: ++
        dodanie i przypisanie: +=
        odejmowanie: -
        zmniejsznie o 1: --
        odjęcie i przypisanie: -=
        mnożenie: *
        mnożenie i przypisanie: *=
        dzielenie: /
        dzielenie i przypisanie: /=
        reszta z dzielenia (modulo): %
        modulo i przyposanie: %=
*/

// Operator przypisania: =
let liczba = 10;
console.log(liczba); // 10

// Operator dodawania: +
console.log(liczba + 10); // 20

// Operator zwiększenia o jeden: ++
liczba = 10;
console.log(liczba++); // Najpierw wyświetli zmienną a potem zwiększy zmienną o 1 więc pokaże się 10 ale zmienna będzie miała wartość 11
console.log(liczba); // 11

liczba = 10;
console.log(++liczba); // Najpierw zwiekszy zmienną o 1 a potem wyświetli zmienną więc pokaże się 11
console.log(liczba); // 11

// Operator dodania i przypisania: +=
liczba = 10;
liczba += 10;
console.log(liczba); // 20

// Operator odejmowania: -
liczba = 10;
console.log(liczba - 10); // 0

// Operator zmniejszania o jeden: --
liczba = 10;
console.log(liczba--); // Najpierw wyświetli zmienną a potem zmniejszy ją o 1 więc pokaże się 10 ale zmienna będzie miała wartość 9
console.log(liczba); // 9

liczba = 10;
console.log(--liczba); // Najpierw zmniejszy zmienną o 1 a potem wyświetli zmienną więc pokaże się 9
console.log(liczba); // 9

// Operator odjęcia i przypisania: -=
liczba = 10;
liczba -= 3
console.log(liczba); // 7

// Operator mnożenia
liczba = 10;
console.log(10 * 5); // 50

// Operator mnożenia i przypisania
liczba = 10;
liczba *= 5;
console.log(liczba); // 50

// Operator dzielenia
liczba = 10;
console.log(10 / 5); // 2

// Operator dzielenia i przypisania
liczba = 10;
liczba /= 5;
console.log(liczba); // 2

// Operator reszty z dzielenia (modulo)
liczba = 10;
console.log(liczba % 5); // 0

// Operator modulo i przypisania
liczba = 10;
liczba %= 5;
console.log(liczba); // 0

// -------- Operatory logiczne -------- //

/* 
    Streszczenie: 
        lub: ||
        i: &&
        porównanie: ==
        porównanie wartości i typu: ===
        przeciwieństwo: !
        inny niż: !=
        inny typ niż: !==
*/

aTrue = true;
bFalse = false;

// lub - jedna z wartości musi być prawdziwa
console.log(aTrue || bFalse); // true

// i - obie wartości muszą być prawdziwe
console.log(aTrue && bFalse); // false

// porównanie
console.log(10 == 10); // true

// porównanie i sprawdzenie typu
console.log(10 === '10'); // false

// przeciwieństwo - zmienia warunek na przeciwny
console.log(!false); // true

// inny niż
console.log(10 != 5); // true

// inny typ niż
console.log(10 !== 10); // false

// -------- If i Else -------- //

/* 
    Składnia:
        if (warunek) { 
            jeśli warunek jest prawdziwy to zrób to 
        } else if(warunek2) { 
            jeżeli poprzedni był fałszem to zrób to 
        } else { 
            jeżeli warunki byłu fałszem to zrób to
        }
*/

liczba = 10;

if (liczba > 0) {
    console.log('Liczba jest większa niż 0')
} else if(liczba < 0) {
    console.log('Liczba jest mniejsza niż 0');
} else {
    console.log('Liczba nie jest większa ani mniejsza od zera');
}

// -------- Switch -------- //
/* 
    Składnia:
        switch(wartość) {
            case x:
                jakiś kod
                break;
            case y:
                jakiś kod
                break;
            default:
                jakiś kod
        }
*/

switch(liczba) {
    case 10: 
        console.log('Liczba jest równa 10');
        break;
    case 15:
        console.log('Liczba jest równa 15');
        break;
    default:
        console.log('Liczba nie jest ani 10 ani 15');
}

// -------- Pętle -------- //
/* 
    Rodzaje:
        while,
        do while,
        for,
        forEach
*/

/* 
    while - petla wykonuje się tak długo jak warunek jest równy true
    Składnia:
        while(warunek) {
            jakiś kod
        };
*/

liczba = 10

while(liczba < 15) {
    liczba++;
}

console.log(liczba); // 15

/* 
    do while - petla wykonuje się tak długo jak warunek jest równy true ale najpierw wykonuje kod a potem sprawdza warunek. Rzadko stosowane
    Składnia:
        do {
            jakiś kod
        } while(warunek);
*/

liczba = 10

do {
    liczba++;
} while(liczba > 15);

console.log(liczba); // 16

/* 
    for - petla wykonuje się do póki warunek jest równy true
    Składnia:
        for(*co ma się wykonać przed rozpoczęciem*, *warunek*, *co ma się wykonać po każdym przejściu pętli*)
*/

for (let i = 0; i < 10; i++) {
    console.log(i); // Wypisuje liczby od 0 do 9
}

/* 
    forEach - petla przechodzi przez każdy element tablicy
    Składnia:
        * indeks i tablica są opcjonalne *

        tablica.forEach((element, indeks, tablica) => {
            kod
        })

        lub

        tablica.forEach(function(element, indeks, tablica) {
            kod
        })
*/

let tablica = [1, 4, 6, 7, 10];
tablica.forEach(element => {
    console.log(element); // Wypisze liczby z tablicy po kolei: 1, 4, 6, 7, 10
})

// -------- Funkcje -------- //

// -------- Funkcje strzałkowe -------- //

// -------- Obiekty -------- //

// Tworzenie obiektu
// typ nazwa = { pole: wartość };
let osoba = { imie: 'Jan', wiek: 18 };

// Pobranie wartości
// objekt.pole
let imieOsoby = osoba.imie;
console.log(imieOsoby); // Jan

// Zmiana wartości
// objekt.pole = wartość
osoba.imie = 'Janusz';
console.log(osoba.imie); // Janusz

// Dodanie nowego pola
// objekt.nowePole = wartość
osoba.wzrost = 190;
console.log(osoba.wzrost); // 190

// -------- Dodatkowe funkcje na tablicach i objektach-------- //

let zadania = [
    {
        'nazwa': 'Zadanie 1',
        'ukonczone': false
    },
    {
        'nazwa': 'Zadanie 2',
        'ukonczone': false
    },
    {
        'nazwa': 'Zadanie 3',
        'ukonczone': true
    },
];

// Mapowanie - pozwala na mapowanie pól z których powstanie nowa tablica/objekt
/*
    Składani:
        * indeks i tablica są opcjonalne *

        tablica/objekt.map(function(element, indeks, tablica) {
            kod ktory wybiera pola
            np. return element.pole
        })

        lub

        tablica/objekt.map((element, indeks, tablica) => {
            kod ktory wybiera pola
            np. return element.pole
        })
*/

// Zwraca nową tablice tylko z nazwami zadań
let nazwyZadania = zadania.map(zadanie => zadanie.nazwa);
console.log(nazwyZadania); // ['Zadanie 1', 'Zadanie 2', 'Zadanie 3'];

// filter reduce 

// -------- Klasy -------- //

// -------- Interfejsy -------- //

// -------- DOM -------- //

// -------- Pobieranie elementu z html -------- //

// -------- Zmiana klas elementu -------- //

// -------- Zmiana id elementu -------- //

// -------- Zmiana stylu elementu -------- //

// -------- Dodawanie nowego elementu do HTML -------- //

// -------- Eventy -------- //