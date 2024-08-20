<?php

class Client extends User {

    public function afficherDetails(){

        return "User: name : {$this->name}, email : {$this->email}, password : {$this->password}";

    }

 }