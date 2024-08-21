let name = document.getElementById('nom-article');
let price = document.getElementById('prix-article');
let category = document.getElementById('categorie-article');
let Submit = document.getElementById('create');
let addPanier = document.getElementById('addPanier');
let order = document.getElementById('passer-commande');




/////// function create //////////
// let idCounter = 0;

// function generateUniqueId() {
//     return idCounter++;
// }

let datamenu;

if(localStorage.item != null){
    datamenu = JSON.parse(localStorage.item)
}else{
    datamenu = [];
}

 Submit.onclick = function (){

 let newItem = {
       
        name : name.value,
        price : price.value,
        category : category.value,
        panierAdded: 0 
 }
 datamenu.push(newItem);
 localStorage.setItem('item', JSON.stringify(datamenu));
 console.log(newItem);

 Menu();
} 

///////////affichage//////////////////

function Menu(){

    let table = '';
     
    for(let i = 0 ; i < datamenu.length ; i++){
        table += ` 
        <tr>
            <th>${datamenu[i].name}</th>
            <th>${datamenu[i].price}</th>
            <th>${datamenu[i].category}</th>
            <th><button class="panier-button" id="addPanier" onclick="updatePanier(${i})">Add to shopping cart</button></th>
        </tr>`

       
    }

    document.getElementById('menuBody').innerHTML = table;
}


Menu();


//////////////////panier////////////////


function updatePanier(index) {
    if (datamenu[index].panierAdded == 0) {
        datamenu[index].panierAdded = 1; 
        localStorage.setItem('item', JSON.stringify(datamenu)); 
        Menu(); 
    }
    let panierItems = [];
    
    
    for (let i = 0; i < datamenu.length; i++) {
        if (datamenu[i].panierAdded == 1) {
            panierItems.push(datamenu[i]);
        }
    }

   
    localStorage.setItem('panierItems', JSON.stringify(panierItems));
    console.log(panierItems)
    
    panier()
}


///////// affichage panier //////////////

function panier() {
    let tableau = '<ul id="liste-panier">';
   
    for (let i = 0; i < datamenu.length; i++) {
        if (datamenu[i].panierAdded == 1) {  
            tableau += ` 
                <li> ${datamenu[i].name} <button class="panier-button" onclick="removePanier(${i})">Remove</button></li>
            `;
        }
    }

    tableau += '</ul>'; 

    document.getElementById('liste-panier').innerHTML = tableau;
}


panier()

function removePanier(index) {
    if (datamenu[index].panierAdded === 1) {
      
        datamenu[index].panierAdded = 0; 
        localStorage.setItem('item', JSON.stringify(datamenu));

       
        let panierItems = JSON.parse(localStorage.getItem('panierItems')) || [];

   
        const itemIndex = panierItems.findIndex(item => item.id === datamenu[index].id);

      
        if (itemIndex !== -1) {
            panierItems.splice(itemIndex, 1);
        }

      
        localStorage.setItem('panierItems', JSON.stringify(panierItems));

        
        panier(); 
        Menu(); 
    }
}





/////////////// commande /////////////////////

let dataOrder;

if (localStorage.getItem('order') !== null) {
    dataOrder = JSON.parse(localStorage.getItem('order'));
} else {
    dataOrder = [];
}

let panierItems = JSON.parse(localStorage.getItem('panierItems')) || [];

order.onclick = function () {
    if (panierItems.length > 0) {
        let newOrder = [...panierItems]; // Clone the panier items to be stored as a new order

        dataOrder.push(newOrder);
        localStorage.setItem('order', JSON.stringify(dataOrder));
        console.log('New order added:', dataOrder);

        // Clear panierItems in both memory and localStorage
        panierItems = [];
        localStorage.setItem('panierItems', JSON.stringify(panierItems));

        // Reset panierAdded flags in datamenu
        datamenu.forEach(item => item.panierAdded = 0);
        localStorage.setItem('item', JSON.stringify(datamenu));

        console.log("PanierItems has been emptied:", panierItems);

        panier(); // Re-render the panier to reflect the empty state
        Menu();
        history();
    } else {
        console.log('No items in panier to place an order.');
    }

};



// let dataOrder;

// if(localStorage.order != null){
//     dataOrder = JSON.parse(localStorage.order)
// }else{
//     dataOrder = [];
// }
// let panierItems = JSON.parse(localStorage.getItem('panierItems'));
//  order.onclick = function (){

//     let newOrder = localStorage.panierItems;

//     dataOrder.push(newOrder);

    
//  localStorage.setItem('order', JSON.stringify(dataOrder));
//  console.log(dataOrder);

//  panierItems = [];
//  localStorage.setItem('panierItems', JSON.stringify(panierItems));

//  console.log("PanierItems has been emptied:", panierItems);
//  history()
// } 


////////////// commande history //////////////////////

function history() {
    let tbl = '<ul id="liste-historique">';
   
    // Iterate over each order in dataOrder
    for (let i = 0; i < dataOrder.length; i++) {
        tbl += `<ul><strong>Order ${i + 1}:</strong><ul>`;
        
        // Check if the current item is an array
        if (Array.isArray(dataOrder[i])) {
            // Iterate over each item in the current order
            for (let j = 0; j < dataOrder[i].length; j++) {
                let item = dataOrder[i][j].name;
                if (typeof item === 'object' && item !== null) {
                    tbl += '<li>';
                    for (let key in item) {
                        if (item.hasOwnProperty(key)) {
                            tbl += `${key}: ${item[key]} `;
                        }
                    }
                    tbl += '</li>';
                } else {
                    tbl += `<li>${item}</li>`;
                }
            }
        } else {
            tbl += `<li>Order ${i + 1} contains invalid data format</li>`;
        }

        // tbl += '</ul></li>'; // Close the nested list for the current order
    }

    // tbl += '</ul>'; // Close the main list

    // Insert the HTML into the 'panier' element
    document.getElementById('liste-historique').innerHTML = tbl;
}

history();
