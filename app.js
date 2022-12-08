let myVehic = function (color, roues, marque){
    this.couleur = color;
    this.roues =  roues;
    this.marque = marque;

    this.demarrer = function () {
        console.log("La voiture démarre")
    }
    this.arreter = function (){
        console.log("La voiture s'arrête");
    }
};

myVehic.prototype.demarrer = function (){
    return this.couleur + this.roues + this.marque
}

let velo = function (color, roues, marque, rayon, peinture){
    myVehic.call(this, color, roues, marque);
      this.nombreRayon = rayon;
      this.myPeinture = peinture

    this.monter = function (){
        console.log("Je monte sur mon vélo")
    }
};

let voiture = function (color, roues, marque, rayon, peinture, assurance, proriaitaire){
    myVehic.call(this, color, roues, marque, rayon, peinture)
    this.assu = assurance;
    this.proprio = proriaitaire;

    this.monter = function (){
        console.log("blabla")
    }

}

velo.prototype = Object.create(myVehic.prototype);
velo.prototype.constructor = velo;

console.log(velo)