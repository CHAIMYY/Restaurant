<?php
require_once 'classes/Showdetails.php';
require_once 'classes/User.php';
require_once 'classes/Commande.php';
require_once 'classes/Menu.php';
require_once 'classes/Panier.php';
require_once 'classes/Admin.php';





$admin = new Admin("John Doe", "john.doe@example.com", "securepassword");
$menuItem = new Menu("Spaghetti Carbonara", "Classic Italian pasta dish with creamy sauce", 12.99, "Main Course");
$client = new Client("hiba","hiba123@gmail","hiba123");
$commande = new Commande("01/02/2024","livred");
$panier = new Panier("2","300");




// Affichage des détails du menu
echo $menuItem->afficherDetails();

echo $admin->afficherDetails();

echo $client->afficherDetails();
echo $commande->afficherDetails();
echo $panier->afficherDetails();




