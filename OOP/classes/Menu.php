<?php

class Menu implements Showdetails {

    protected $name;
    private $description ;
    private $price;
    private $category;

    public function __construct($name,$description,$price,$category)
    {
        $this->name = $name;
        $this->description = $description;
        $this->price = $price;
        $this->category = $category;
    }

    //////////////////GETERS///////////////////

    public function getName(){
        return $this->name;
      }

       public function getDescription(){
        return $this->description; 
       }

       public function getPrice(){
        return $this->price; 
       }

       public function getCategory(){
        return $this->category; 
       }


    /////////////////SETERS////////////////////   

    public function setName($name){
        $this->name = $name;
    }
    public function setDescription($description){
        $this->description = $description;
    }
    public function setPrice($price){
        $this->price = $price;
    }
    public function setCategory($category){
        $this->category = $category;
    }

    public function afficherDetails(){
        return "Menu: name : {$this->name}, Description : {$this->description}, Price : {$this->price}, Category : {$this->category}";
    }

}

// Instanciation de la classe Menu
$menuItem = new Menu("Spaghetti Carbonara", "Classic Italian pasta dish with creamy sauce", 12.99, "Main Course");

// Affichage des détails du menu
echo $menuItem->afficherDetails();