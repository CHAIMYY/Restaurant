<?php

class Panier implements Showdetails {

    private $quantity;
    private $total;



    public function __construct($quantity,$total)
    {
        $this->quantity = $quantity;
        $this->total = $total;
    }


 public function getQuantity(){
  return $this->quantity; 
 }

 public function getTotal(){
    return $this->total;
 }

public function setQuantity($quantity){
    $this->quantity = $quantity;
}

public function setTotal($total){
    $this->total = $total;

}

    public function afficherDetails(){

        return "Panier: Quantity : {$this->quantity}, Tota : {$this->total}";
    }
}