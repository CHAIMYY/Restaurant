let name = document.getElementById('nom-article');
let price = document.getElementById('prix-article');
let category = document.getElementById('categorie-article');
let Submit = document.getElementById('create');
let addPanier = document.getElementById('addPanier');




/////// function create //////////

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
            <td><button class="panier-button" id="addPanier" onclick="updatePanier(${i})">Add to Panier</button></td>
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
}

///////// affichage panier //////////////

function panier() {
    let tableau = '<ul id="liste-panier">';
   
    for (let i = 0; i < datamenu.length; i++) {
        if (datamenu[i].panierAdded == 1) {  
            tableau += ` 
                <li> Coffee <button class="panier-button" onclick="updatePanier(${i})">Add to Panier</button></li>
            `;
        }
    }

    tableau += '</ul>'; 

    document.getElementById('panier').innerHTML = tableau;
}


panier()

