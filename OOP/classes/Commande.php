<?php

class Commande implements Showdetails {
   
    protected $date;
    private $statut;

    
    public function __construct($date,$statut)
    {
        $this->date = $date;
        $this->statut = $statut;
       
    }

    public function getDate(){
        return $this->date;
      }

       public function getStatut(){
        return $this->statut; 
       }

      
       
       public function setDate($date){
        $this->date = $date;
    }
    public function setStatut($statut){
        $this->statut = $statut;
    }


    public function afficherDetails(){

        return "Order: date : {$this->date}, statut : {$this->statut}";
    }

}