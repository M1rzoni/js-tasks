//First task

//Napraviti novi paragraph sa teksom "Hello"
//svaki put kad se klikne na dugme, ako je broj paragrapha veci od 5
//uklanja se prvi dodani paragraph

let count = 0;
let container = document.querySelector(".container");

function addParagraph() {
  if (count <= 4) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Hello angular";
    container.appendChild(newParagraph);
    count++;
    console.log(array, count);
  } else if (count === 5) {
    container.removeChild(container.firstChild);
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "new angular";
    container.appendChild(newParagraph);
  }
}

//DONE!<3

//Second task

//Napraviti formu sa dva inputa za unos imena i email adrese
//Napisati funkciju koja provjerava da li su oba polja
//popunjena ispravno (ime ne smoje biti prazno a email mora imati @ i .)
//Ako je validacija uspjesna prikazati poruku "Forma uspjesna poslata"
// u suprtnom izbacii neki error;

function checkValue() {
  let inputNameValue = document.querySelector(".name").value;
  let inputEmailValue = document.querySelector(".email").value;

  if (inputNameValue === "") {
    alert("Ime ne smije biti prazno");
  } else if (!inputEmailValue.includes("@")) {
    alert("Pogresan email");
  } else {
    console.log("Uspjesno poslata forma");
  }
}

//DONE!<3

//Third task

// Kreiraj objekt koji predstavlja knjigu
//(s poljima: naslov, autor, brojStranica, i procitana).
// Napiši funkciju koja prima taj objekt i ispisuje informacije o knjizi
//u konzolu.
// Dodaj metodu u objekt koja će mijenjati status procitana iz false u true.

const book = {
  naslov: "Na drini cuprija",
  autor: "Ivo Andrić",
  brojStranica: 400,
  procitana: false,
};

function handleBookObject(book) {
  console.log(
    `Naslov: ${book.naslov}, Autor: ${book.autor}, BrojStranica: ${book.brojStranica}, Procitana: ${book.procitana} `
  );

  let checkbox = document.querySelector(".checkbox");

  if (checkbox.checked) {
    book.procitana = true;
  } else {
    book.procitana = false;
  }
  console.log(
    `Naslov: ${book.naslov}, Autor: ${book.autor}, BrojStranica: ${book.brojStranica}, Procitana: ${book.procitana} `
  );
}

handleBookObject(book);

//DONE!<3

//Fourth Task

// Napiši funkciju koja:
// Prima niz brojeva i vraća novi niz koji sadrži samo parne brojeve iz originalnog niza.
// Na kraju vrati sumu svih brojeva iz novog niz

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
let sum = 0;
function handleArray() {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
      evenNumbers.push(arrayOfNumbers[i]);
    }
  }

  for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
  }

  console.log(evenNumbers);
  console.log(sum);
}

handleArray();

//DONE!<3

//FIFTH TASK

// Napiši funkciju koja simulira dohvaćanje podataka s API-ja pomoću Promise. Funkcija treba:

// Vratiti uspješan odgovor nakon 2 sekunde (npr. niz podataka o korisnicima).
// Ukoliko je došlo do greške, nakon 2 sekunde vratiti poruku o grešci.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let errorChance = Math.random() < 0.3;

      if (!errorChance) {
        resolve([
          { id: 1, name: "Mirza", email: "mirza.sabanovic@ipi-akademija.ba" },
          { id: 2, name: "Mirza", email: "mirza.sabanovic@ipi-akademija.ba" },
          { id: 3, name: "Mirza", email: "mirza.sabanovic@ipi-akademija.ba" },
        ]);
      } else {
        reject("Greska: podaci nisu uspjesno dohvaceni");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Uspjesno dohvaceni podaci", data);
  })
  .catch((error) => {
    console.log(error);
  });

//DONE!<3

// SIXTH TASK

//Napraviti todo app koja ima mogucnost dodavanja i brisanja taskova.

let listContainer = document.querySelector(".todo-list");

function addTodo() {
  let inputValue = document.querySelector(".todo-input").value;
  let newTodo = document.createElement("p");
  let xButton = document.createElement("button");
  xButton.classList.add("x-button");
  xButton.innerHTML = "X";
  newTodo.innerHTML = inputValue;
  listContainer.append(newTodo, xButton);

  xButton.addEventListener("click", () => {
    newTodo.remove();
    xButton.remove();
  });
}

//DONE!<3

//SEVENTH TASK

//Napraviti kalkulator sa osnovnim operacijama;

let displayInput = document.querySelector(".display-input");

function test(value) {
  displayInput.value += value;
}
function calculate() {
  let calc = eval(displayInput.value);
  displayInput.value = calc;
}

function clearInput() {
  displayInput.value = "";
}
