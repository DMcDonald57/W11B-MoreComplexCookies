document.body.style.backgroundColor = "bisque"
document.body.style.fontSize = `16pt`

// attempted to create an array into cookie but could not
// determine way to keep game title as cookie name

// let gameArray = [`MW2`,`Skyrim`,`FarCry6`,`Horizon5`];

// function choiceHandler(event) {
//     let choice = event.target.parentElement;
//     if (choice.id == `MW2`) {
//             let gameJSON = JSON.stringify(gameArray);
//             Cookies.set(`MW2`, gameJSON)
//     }else if (choice.id == `Skyrim`) {
//             let gameJSON = JSON.stringify(gameArray);
//             Cookies.set(`Skyrim`, gameJSON)
//     }else if (choice.id ==`FarCry6`) {
//             let gameJSON = JSON.stringify(gameArray);
//             Cookies.set(`FarCry6`, gameJSON)
//     } else if (choice.id == `Horizon5`) {
//             let gameJSON = JSON.stringify(gameArray);
//             Cookies.set(`Horizon5`, gameJSON)
//     } else {
//         return(`<p>Please make a selection.</p>`);
//     }
// }

function choiceHandler(event) {
    let choice = event.target.parentElement;
    if (choice.id == `MW2`) {
            let game1JSON = JSON.stringify(game1);
            Cookies.set(`MW2`, game1JSON)
    }else if (choice.id == `Skyrim`) {
            let game2JSON = JSON.stringify(game2);
            Cookies.set(`Skyrim`, game2JSON)
    }else if (choice.id ==`FarCry6`) {
            let game3JSON = JSON.stringify(game3);
            Cookies.set(`FarCry6`, game3JSON)
    }else if (choice.id == `Horizon5`) {
            let game4JSON = JSON.stringify(game4);
            Cookies.set(`Horizon5`, game4JSON);
    }else{
        return(`<p>Please make a selection.</p>`);
    }
    
}


// First item
let game1 = {
    title: `COD - ModernWarfare2`,
    imageUrl: `https://www.truetrophies.com/boxart/Game_18500.jpg`,
    price: `$89.00`,
    description: `Battle your way through the center
        of a global conflict with Task Force 141.`
}
// Second item
let game2 = {
    title: `Skyrim`,
    imageUrl: `https://at-cdn-s01.audiotool.com/2015/05/26/documents/VXL58qZHo7ydkCHTJSmRY2NOZVUgU/0/cover256x256-94ebc094d4ba4ede99de745fd44725bc.jpg`,
    price: `$59.00`,
    description: `Roam the open world of Skyrim and 
        explore cities, caves and fortresses.`
}

// Third item
let game3 = {
    title:`FarCry6`,
    imageUrl:`https://static.truetrophies.com/boxart/Game_13647.jpg`,
    price:`$69.00`,
    description:`Become a modern day guerrilla fighter 
    and fight the dictator of Yara - Anton Castillo.`
}

// Forth item
let game4 = {
    title:`Forza Horizon 5`,
    imageUrl:`https://s.cdnshm.com/catalog/hu/t/156766933/forza-horizon-5-digitalis-kulcs-xbox.jpg`,
    price: `$69.00`,
    description:`Race your way to the top through the 
    Mayan Temples, beaches and jungles of Mexico.`
}

// inserting item details
let choice1 = document.getElementById(`MW2`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>${game1.price}</p>`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>${game1.description}</p>`);
choice1.insertAdjacentHTML(`afterbegin`,`<img src="${game1.imageUrl}" alt="CODMW2">`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>${game1.title}</p>`);

// inserting item details
let choice2 = document.getElementById(`Skyrim`);
choice2.insertAdjacentHTML(`afterbegin`,`<p>${game2.price}</p>`);
choice2.insertAdjacentHTML(`afterbegin`,`<p>${game2.description}</p>`);
choice2.insertAdjacentHTML(`afterbegin`,`<img src="${game2.imageUrl}" alt="Skyrim">`);
choice2.insertAdjacentHTML(`afterbegin`,`<p>${game2.title}</p>`);

// inserting item details
let choice3 = document.getElementById(`FarCry6`);
choice3.insertAdjacentHTML(`afterbegin`,`<p>${game3.price}</p>`);
choice3.insertAdjacentHTML(`afterbegin`,`<p>${game3.description}</p>`);
choice3.insertAdjacentHTML(`afterbegin`,`<img src="${game3.imageUrl}" alt="FarCry6">`);
choice3.insertAdjacentHTML(`afterbegin`,`<p>${game3.title}</p>`);

// inserting item details
let choice4 = document.getElementById(`Horizon5`);
choice4.insertAdjacentHTML(`afterbegin`,`<p>${game4.price}</p>`);
choice4.insertAdjacentHTML(`afterbegin`,`<p>${game4.description}</p>`);
choice4.insertAdjacentHTML(`afterbegin`,`<img src="${game4.imageUrl}" alt="Horizon5">`);
choice4.insertAdjacentHTML(`afterbegin`,`<p>${game4.title}</p>`);

// This activates the JS when the game selection button is pressed
let choices = []
choice1.querySelector(`button`).addEventListener(`click`, choiceHandler);
choice2.querySelector(`button`).addEventListener(`click`, choiceHandler);
choice3.querySelector(`button`).addEventListener(`click`, choiceHandler);
choice4.querySelector(`button`).addEventListener(`click`, choiceHandler);
