let button = document.querySelector('[data-id=button]');
let input = document.querySelector('[data-id=name]');
let searchTerm = '';
let dogList;

//1A CODEALONG
//console.log('Hello world!');

//1B CODEALONG
//button.addEventListener('click', () => console.log('Hello world!'));

//1C CODEALONG
//const setName = () => { console.log('Hello ' + input.value); }
//button.addEventListener('click', setName);

//2A CODEALONG
const fetchRandomDogs = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(data);
    console.log(data.message);
//2B
    const resultDiv = document.querySelector('[data-id=result]');
    resultDiv.innerHTML = `<img src=${data.message}></img>`
}
//fetchRandomDogs();
button.addEventListener('click', fetchRandomDogs);

//--------------------//

//3A
const fetchAllDogs = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log("data", data);
//3B
    const dogs = Object.keys(data.message);
    console.log("dogs", dogs);
    dogList = dogs;
    insertDogs(dogs);
}
//3C
const insertDogs = (dogs) => {
    const breedsDiv = document.querySelector('[data-id=breeds]');
    breedsDiv.innerHTML = '';
    dogs.forEach((dog) => {
        const dogElement = document.createElement("p")
        dogElement.innerHTML = dog
        dogElement.onclick = () => getRandomBreedImage(dog)
        breedsDiv.insertAdjacentElement('beforeend', dogElement)
    })
}

//4A
document.querySelector("[data-id=name]").oninput = (e) => {
    const value = e.target.value;
    const filteredDogs = dogList.filter(dog => dog.startsWith(value));
    insertDogs(filteredDogs);
};

//4B
const getRandomBreedImage = async breed => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    const imgSrc = data.message;

    const img = document.createElement("img");
    img.src = imgSrc;

    const result = document.querySelector("[data-id=image]");
    result.appendChild(img)
}

fetchAllDogs();
