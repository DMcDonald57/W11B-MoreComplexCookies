document.body.style.backgroundColor = "bisque"

function choiceHandler(event){
    let parent = event.target.parentElement;
    if (parent.id == "MW2"){
        let gameJson = JSON.stringify(game1);
        Cookies.set('gameSelection', gameJson)
    } else if (parent.id == "Skyrim"){
        let gameJson = JSON.stringify(game2);
        Cookies.set('gameSelection', gameJson)
    } else if (parent.id == "FarCry6"){
        let gameJson = JSON.stringify(game3);
        Cookies.set('gameSelection', gameJson)
    } else if (parent.id == "Horizan5"){
        let gameJson = JSON.stringify(game4);
        Cookies.set('gameSelection', gameJson)
}
}

// First item
let game1 = {
    name : `COD - ModernWarfare2`,
    imageUrl : `https://www.truetrophies.com/boxart/Game_18500.jpg`,
    price : `$89.00`,
    description : `Battle your way through the center
        of a global conflict with Task Force 141.`
}
// Second item
let game2 = {
    name: `Skyrim`,
    imageUrl : `https://at-cdn-s01.audiotool.com/2015/05/26/documents/VXL58qZHo7ydkCHTJSmRY2NOZVUgU/0/cover256x256-94ebc094d4ba4ede99de745fd44725bc.jpg`,
    price : `$59.00`,
    description : `Roam the open world of Skyrim and 
        explore cities, caves and fortresses.`
}

// Third item
let game3 = {
    name: `FarCry6`,
    imageUrl : `https://static.truetrophies.com/boxart/Game_13647.jpg`,
    price : `$69.00`,
    description : `Become a modern day guerrilla fighter 
    and fight the dictator of Yara - Anton Castillo.`
}

// Forth item
let game4 = {
    name : `Forza Horizan 5`,
    imageUrl : `https://s.cdnshm.com/catalog/hu/t/156766933/forza-horizon-5-digitalis-kulcs-xbox.jpg`,
    price : `$69.00`,
    description :`Race your way to the top through the 
    Mayan Temples, beaches and jungles of Mexico.`
}

// inserting item details
let choice1 = document.getElementById(`MW2`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>Price:${game1.price}</p>`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>Discription:${game1.description}</p>`);
choice1.insertAdjacentHTML(`afterbegin`,`<img src="${game1.imageUrl}" alt="CODMW2">`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>Title:${game1.name}</p>`);

// inserting item details
let choice2 = document.getElementById(`Skyrim`);
choice2.insertAdjacentHTML(`afterbegin`,`<p>Price:${game2.price}</p>`);
choice2.insertAdjacentHTML(`afterbegin`,`<p>Discription:${game2.description}</p>`);
choice2.insertAdjacentHTML(`afterbegin`,`<img src="${game2.imageUrl}" alt="Skyrim">`);
choice2.insertAdjacentHTML(`afterbegin`,`<p>Title:${game2.name}</p>`);

// inserting item details
let choice3 = document.getElementById(`FarCry6`);
choice3.insertAdjacentHTML(`afterbegin`,`<p>Price:${game3.price}</p>`);
choice3.insertAdjacentHTML(`afterbegin`,`<p>Discription:${game3.description}</p>`);
choice3.insertAdjacentHTML(`afterbegin`,`<img src="${game3.imageUrl}" alt="FarCry6">`);
choice3.insertAdjacentHTML(`afterbegin`,`<p>Title:${game3.name}</p>`);

// inserting item details
let choice4 = document.getElementById(`Horizan5`);
choice4.insertAdjacentHTML(`afterbegin`,`<p>Price:${game4.price}</p>`);
choice4.insertAdjacentHTML(`afterbegin`,`<p>Discription:${game4.description}</p>`);
choice4.insertAdjacentHTML(`afterbegin`,`<img src="${game4.imageUrl}" alt="Horizan5">`);
choice4.insertAdjacentHTML(`afterbegin`,`<p>Title:${game4.name}</p>`);
