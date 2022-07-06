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
