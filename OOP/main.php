<?php
require_once 'classes/Showdetails.php';
require_once 'classes/User.php';
require_once 'classes/Commande.php';
require_once 'classes/Menu.php';
require_once 'classes/Panier.php';
require_once 'classes/Admin.php';


// Création des propriétaires
// $Panier1 = new Panier("John Doe", "123 Elm St", "123456");
// $Panier2 = new Panier("Jane Smith", "456 Oak St", "67890");

// // Création des véhicules
// $Commande1 = new Commande("ABC123", "voiture", $proprietaire1);
// $Commande2 = new Commande("XYZ789", "camion", $proprietaire2);
// $Commande3 = new Commande("LMN456", "moto");

// // Création des trajets
// $Menu1 = new Menu( "City A", "City B", "2024-06-01 08:00", []);
// $Menu2 = new Menu( "City C", "City D", "2024-06-02 10:00", []);

// // Ajout d'événements aux trajets
// $event1 = new Event("arrêt"," 10:15", "testtesttesttesttest");
// $event2 = new Event("dépassement de vitesse", "21:55", "testtesttesttesttest");

// $trajet1->setEvents([$event1, $event2]);

// // Création des péages
// $peage1 = new Peage("péage 1", 50, $vehicule1);
// $peage2 = new Peage("péage 2", 75, $vehicule2);

// // Affichage des détails
// echo "\n";
// echo "--- Détails des propriétaires ---:\n";
// $Panier1->afficherDetails();
// $Panier2->afficherDetails();
// echo "\n\n";

// echo "--- Détails des véhicules ---:\n";
// echo $Commande1->afficherDetails();
// echo "\n";
// echo $Commande2->afficherDetails();
// echo "\n";
// echo $Commande3->afficherDetails();
// echo "\n\n";
// echo "\n";


// echo "--- Détails des trajets ---:\n";
// echo $Menu1->afficherDetails();
// echo "\n";
// echo $Menu2->afficherDetails();
// echo "\n\n";


// echo "--- Détails des péages ---:\n";
// echo $peage1->afficherDetails();
// echo "\n";
// echo $peage2->afficherDetails();
// echo "\n\n";



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




