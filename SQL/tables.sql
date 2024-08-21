

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    role ENUM('client', 'admin') DEFAULT 'client'
);

CREATE TABLE menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    categorie ENUM('entree', 'plat_principal', 'dessert', 'boisson')
);

CREATE TABLE commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT,
    date_commande DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('en_cours', 'terminee') DEFAULT 'en_cours',
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)
);

CREATE TABLE elements_panier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_commande INT,
    id_menu INT,
    quantite INT NOT NULL,
    FOREIGN KEY (id_commande) REFERENCES commandes(id),
    FOREIGN KEY (id_menu) REFERENCES menu(id)
);


-- Insertion des données initiales
INSERT INTO utilisateurs (nom, email, mot_de_passe, role)
VALUES ('Admin', 'admin@restaurant.com', 'admin123', 'admin');

INSERT INTO menu (nom, description, prix, categorie)
VALUES ('Salade César', 'Salade avec poulet, croutons, parmesan', 7.99, 'entree'),
       ('Burger', 'Burger de boeuf avec fromage et bacon', 12.50, 'plat_principal'),
       ('Tarte aux pommes', 'Tarte aux pommes maison', 4.00, 'dessert'),
       ('Coca-Cola', 'Soda de 33cl', 2.00, 'boisson');


