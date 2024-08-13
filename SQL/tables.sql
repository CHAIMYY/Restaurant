CREATE TABLE utilisateurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    role ENUM('client', 'admin')
);

CREATE TABLE menu (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    categorie VARCHAR(50),
    prix DECIMAL(10, 2),
    description TEXT
);

CREATE TABLE commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    statut ENUM('en cours', 'livrée'),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
);

CREATE TABLE elements_panier (
    id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    item_id INT,
    quantite INT,
    total ECIMAL(10, 2),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (item_id) REFERENCES menu(id)
);



INSERT INTO utilisateurs (nom, email, role) VALUES 
('Alice', 'alice@example.com', 'client'),
('Bob', 'bob@example.com', 'admin'),
('Charlie', 'charlie@example.com', 'client');


INSERT INTO menu (nom, categorie, prix, description) VALUES 
('Margherita Pizza', 'Pizza', 8.99, 'Classic pizza with tomatoes, mozzarella, and basil.'),
('Caesar Salad', 'Salad', 6.50, 'Fresh romaine lettuce with Caesar dressing and croutons.'),
('Spaghetti Carbonara', 'Pasta', 12.00, 'Spaghetti with creamy sauce, pancetta, and Parmesan cheese.');



INSERT INTO commandes (utilisateur_id, statut) VALUES 
(1, 'en cours'),
(2, 'livrée'),
(1, 'en cours');


INSERT INTO elements_panier (utilisateur_id, item_id, quantite, total) VALUES 
(1, 1, 2, 17.98),  
(1, 2, 1, 6.50),  
(2, 3, 1, 12.00), 
(3, 1, 3, 26.97); 



