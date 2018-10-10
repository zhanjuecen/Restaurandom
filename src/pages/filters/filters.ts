import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {
  longitude: number;
  latitude: number;
  walking: boolean;
  term: string;
  price: number;

  color: string = "#ffdd7a";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.longitude = this.navParams.get("longitude");
    this.latitude = this.navParams.get("latitude");
    this.price = this.navParams.get("price");
    this.walking = false;
    this.term = "breakfast";
  }

  search() {
    this.navCtrl.push('ResultPage',
      {longitude: this.longitude,
        latitude: this.latitude,
        walking: this.walking,
        term: this.term,
        price: this.price});
  }

  changeColor() {
    if (this.color === "#ffdd7a") {
      this.color = "#ffb75c";
    } else {
      this.color = "#ffdd7a";
    }
  }

  hideWalk() {
    this.walking = false;
    let x = document.getElementById("transport_walk");
    let y = document.getElementById("transport_car");
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById("transport_car").innerHTML = "whatever";
  }

  hideCar() {
    this.walking = true;
    let y = document.getElementById("transport_walk");
    let x = document.getElementById("transport_car");
    x.style.display = "none";
    y.style.display = "block";
  }
  hideBreakfast() {
    this.term = "lunch";
    let y = document.getElementById("type_breakfast");
    let x = document.getElementById("type_lunch");
    y.style.display = "none";
    x.style.display = "block";
  }
  hideLunch() {
    this.term = "dinner";
    let y = document.getElementById("type_lunch");
    let x = document.getElementById("type_dinner");
    y.style.display = "none";
    x.style.display = "block";
  }
  hideDinner() {
    this.term = "cafe";
    let y = document.getElementById("type_dinner");
    let x = document.getElementById("type_cafe");
    y.style.display = "none";
    x.style.display = "block";
  }
  hideCafe() {
    this.term = "latenight";
    let y = document.getElementById("type_cafe");
    let x = document.getElementById("type_snack");
    y.style.display = "none";
    x.style.display = "block";
  }
  hideSnack() {
    this.term = "breakfast";
    let y = document.getElementById("type_snack");
    let x = document.getElementById("type_breakfast");
    y.style.display = "none";
    x.style.display = "block";
  }

}

