let buttonClickRandom = document.querySelector('[data-id=button-random]');
let buttonClickAll = document.querySelector('[data-id=button-all]');
let buttonClickFilter = document.querySelector('[data-id=filter]');
let input = document.querySelector('[data-id=name]');
let searchTerm = '';

//1A
//console.log('Hello world!');

//1B
//buttonClick.addEventListener('click', () => console.log('Hello world!'));

//1C
const setName = () => { console.log('Hello ' + input.value); }
//buttonClickRandom.addEventListener('click', setName);

//2A
const fetchRandomDogs = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(data);
//2B
    const resultDiv = document.querySelector('[data-id=result]');
    resultDiv.innerHTML = `<img src=${data.message}></img>`
}

buttonClickRandom.addEventListener('click', fetchRandomDogs);

//3A
const fetchAllDogs = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log("data", data);
//3B
    const breeds = Object.keys(data.message);
    console.log("breeds", breeds);
//3C
    const breedsDiv = document.querySelector('[data-id=breeds]');
     breeds
     .filter((breed => breed.startsWith(input.value)))
     .forEach((breed) => {
         breedsDiv.insertAdjacentHTML('beforeend', `<p>${breed}</p>`)
        })

//buttonClickAll.addEventListener('click', fetchAllDogs);
//const filteredDogs = breeds.filter((breed => breed.startsWith(input.value)));
//console.log('Searching for ' + input.value); 
//console.log("filtered dogs", filteredDogs);
}
fetchAllDogs();

//4
input.addEventListener('input', (event) => {
	searchTerm = event.target.value;
	// re-display again based on the new search_term
	fetchAllDogs();
});



//3C
//const breedsDiv = document.querySelector('[data-id=breeds]');
//breedsDiv.insertAdjacentHTML('beforeend', `<li>${breeds}</li>`);
//breedsDiv.innerHTML = `<li>${breeds}</li>`
//breeds.forEach(breed => breedsDiv.innerHTML = `<li>${breed}</li>`)
// breeds
     //.filter(breed => breed.indexOf(value) === 0)
//     .forEach((breed) => {
//         breedsDiv.insertAdjacentHTML('beforeend', `<li>${breed}</li>`);
//     });
