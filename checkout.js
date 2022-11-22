document.body.style.backgroundColor = "bisque"

// This converts the selection from apps to the checkout page

// this was to try and get item from cookie

// let gameJSON = Cookies.get(`Skyrim`);
// let selection = JSON.parse(gameArray);



let game1JSON = Cookies.get(`MW2`);
let game1Selection = JSON.parse(game1JSON);

let game2JSON = Cookies.get(`Skyrim`);
let game2Selection = JSON.parse(game2JSON);

let game3JSON = Cookies.get(`FarCry6`);
let game3Selection = JSON.parse(game3JSON);

let game4JSON = Cookies.get(`Horizon5`);
let game4Selection = JSON.parse(game4JSON);



document.body.insertAdjacentHTML(`beforeend`,`<h3>${game1Selection.title}</h3>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game1Selection.price}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game1Selection.description}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<img src="${game1Selection.imageUrl}"alt="test">`);

document.body.insertAdjacentHTML(`beforeend`,`<h3>${game2Selection.title}</h3>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game2Selection.price}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game2Selection.description}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<img src="${game2Selection.imageUrl}"alt="test">`);

document.body.insertAdjacentHTML(`beforeend`,`<h3>${game3Selection.title}</h3>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game3Selection.price}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game3Selection.description}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<img src="${game3Selection.imageUrl}"alt="test">`);

document.body.insertAdjacentHTML(`beforeend`,`<h3>${game4Selection.title}</h3>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game4Selection.price}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${game4Selection.description}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<img src="${game4Selection.imageUrl}"alt="test">`);

