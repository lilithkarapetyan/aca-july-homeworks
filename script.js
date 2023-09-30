const titleConatiner = document.getElementById("title");
titleConatiner.append(createLogo("images/logo.png"));
titleConatiner.append(createCompanyName("My fruits"));
titleConatiner.append(createDescription("The best fruits you'll ever taste"));
const fruits = ['Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Black sapote', 'Blueberry', 'Boysenberry', 'Breadfruit', "Buddha's hand (fingered citron)", 'Cacao', 'Cactus pear', 'Canistel - also called egg fruit', 'Catmon', 'Cempedak', 'Cherimoya (Custard Apple)', 'Cherry', 'Chico fruit', 'Cloudberry', 'Coco de mer', 'Coconut', 'Crab apple', 'Cranberry', 'Currant', 'Damson', 'Date', 'Dragonfruit (or Pitaya)', 'Durian', 'Elderberry', 'Feijoa'];
const list = document.getElementById("list");
const fruitImageUrl = "https://img.freepik.com/free-vector/fruits-berries-colorful-icons-collection_1284-20043.jpg?w=2000";
fruits.forEach((fruitName) => drawFruit(fruitName, fruitImageUrl, list));

function createLogo(imageUrl) {
    const logo = document.createElement('img');
    logo.src = imageUrl;
    logo.id = "logo";
    return logo;
}
function createCompanyName(name) {
    const companyName = document.createElement("h1");
    companyName.id = "company-name";
    companyName.className = "introduction";
    companyName.innerHTML = name;
    return companyName;
}
function createDescription(text) {
    const desc = document.createElement("h4");
    desc.className = "introduction";
    desc.innerHTML = text;
    return desc;
}
function drawFruit(fruitName, fruitImageUrl, container) {
    const fruitContainer = document.createElement('div');
    fruitContainer.className = "item";
    fruitContainer.onclick = () => console.log(fruitName);
    
    const fruit = document.createElement('p');
    fruit.innerHTML = fruitName;

    const fruitImage = document.createElement("img");
    fruitImage.src = fruitImageUrl;
    fruitImage.className = "fruit-image";

    fruitContainer.append(fruit);
    fruitContainer.prepend(fruitImage);
    container.append(fruitContainer);
}
function onChange(e) {
    console.log(e.target.id, e.target.value);
}

function search() {
    console.log("searching....")
}


document.getElementById("search1").addEventListener("keydown", (event) => {
    const txt = event.key + (event.ctrlKey ? " + ctrl" : "");
    console.log(txt);
})

document.addEventListener("click", () => {
    console.log("click")
})