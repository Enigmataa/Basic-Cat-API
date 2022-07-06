////rectearion of Vladi's stuff
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     dataFunc(data);
//   });

// function dataFunc(people) {
//   people.forEach((person) => {
//     let container = document.createElement("li");

//     let name = document.createElement("h3"); //makes the element
//     name.classList.add("name"); //gives it an id
//     name.innerText = `${person.id} ${person.name}`; //shows it on the page

//     let email = document.createElement("p");
//     email.classList.add("email");
//     email.innerText = person.email;

//     let city = document.createElement("p");
//     city.classList.add("city");
//     city.innerText = person.address.city;

//     container.appendChild(name);
//     container.appendChild(email);
//     container.appendChild(city);

//     document.querySelector("#ppl").appendChild(container);
//   });
// }

////regular cat API
fetch("https://api.thecatapi.com/v1/breeds")
  .then((response) => response.json())
  .then((data) => {
    breedsFunction(data);
  });

function breedsFunction(breed) {
  breed.forEach((cat) => {
    let content = document.createElement("li");

    let link = document.createElement("a");
    link.classList.add("link");
    link.href = cat?.wikipedia_url;
    link.innerText = "Wiki page \n \n";

    let name = document.createElement("p");
    name.classList.add("name");
    name.innerText = `Breed: ${cat.name}\n Origin: ${cat.origin}\n Description: ${cat.description}`;

    let image = document.createElement("img");
    image.classList.add("image");
    image.src = cat?.image?.url; // ?. "ako ima neshto go vrushta"

    // content.appendChild(id);
    content.appendChild(name);
    content.appendChild(link);
    content.appendChild(image);
    document.querySelector(".container").appendChild(content);
  });
}
///////////////////////////
// const catPromise = new Promise((resolve, reject) => {
//   resolve(["Misho", "Lucky", "James", "Bella", "Oscar"]);
// });

// catPromise
//   .then((data) => {
//     return data.map((cat) => `${cat}:3`);
//   })
//   .then((data) => {
//     return data.map((cat) => cat.slice(0, -3));
//   })
//   .then((data) => {
//     return data.sort();
//   })
//   .then((data) => data.forEach((cat) => console.log(cat)))
//   .finally(() => {
//     console.log("Work is done");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
