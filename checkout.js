document.body.style.backgroundColor = "bisque"

// This converts the selection from apps to the checkout page

let selectionJSON = Cookies.get(`MW2`);
let selection = JSON.parse(selectionJSON);

document.body.insertAdjacentHTML(`beforeend`,`<h3>${selection.title}</h3>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${selection.price}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<p>${selection.description}</p>`);
document.body.insertAdjacentHTML(`beforeend`,`<img src="${selection.imageUrl}"alt="test">`);

