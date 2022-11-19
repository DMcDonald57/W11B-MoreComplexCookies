



let game1 = {
    name : `COD - ModernWarfare2`,
    imageUrl : `https://gamingintel.com/wp-content/uploads/2022/09/All-MW2-Campaign-Missions-Leak-Including-Locations-Squad-More-728x410.jpg`,
    price : 89,
    description : `Battle your way through the center
        of a global conflict with Task Force 141.`
}

let game2 = {
    name: `Skyrim`,
    imageUrl : `https://upload.wikimedia.org/wikipedia/fr/0/0d/The_Elder_Scrolls_5_Skyrim_Logo.png`,
    price : 59,
    description : `Roam the open world of Skyrim and 
        explore cities, caves and fortresses.`
}

let game3 = {
    name: `FarCry6`,
    imageUrl : `https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Bn213V7aySLmjGwfQkSMy/bffebc6e9a19f3524a306d89cbc3b0d4/fc6-page_meta-thumbnail.jpg`,
    price : 69,
    discription : `Become a modern day guerrilla fighter 
    and fight the dictator of Yara - Anton Castillo.`
}

let game4 = {
    name : `Forza Horizan 5`,
    imageUrl : `https://digistatement.com/wp-content/uploads/2022/03/Forza-Horizon-5-1-750x375-1.jpg`,
    price : 69,
    discription : `Race your way to the top through the 
    Mayan Temples, beaches and jungles of Mexico.`
}

let choice1 = document.getElementById(`MW2`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>Price:${game1.price}</p>`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>Discription:${game1.description}</p>`);
choice1.insertAdjacentHTML(`afterbegin`,`<img src="${game1.imageUrl}" alt="CODMW2">`);
choice1.insertAdjacentHTML(`afterbegin`,`<p>Title:${game1.name}</p>`);

