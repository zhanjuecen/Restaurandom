import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YelpProvider } from '../../providers/yelp/yelp';
import { GoogleProvider } from '../../providers/google/google'

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  longitude: number;
  latitude: number;
  walking: boolean;
  term: string;
  price: number;

  response: any;

  selected: any;
  name: any;
  address: string;
  keywords: Array<string> = [];
  google_url: string;
  waze_url: string;
  uber_url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private yelp: YelpProvider, private google: GoogleProvider) {
    this.longitude = this.navParams.get("longitude");
    this.latitude = this.navParams.get("latitude");
    this.walking = this.navParams.get("walking");
    this.term = this.navParams.get("term");
    this.price = this.navParams.get("price");

    this.search();
  }

  search() {
    let radius;
    if (this.walking) {
      radius = 1500;
    } else {
      radius = 2560;
    }
    this.yelp.get(this.latitude, this.longitude, radius, this.term, this.price).subscribe(
      res => {
        this.response = res.json();
        this.selectRestaurant(this.response);
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`));
  }

  selectRestaurant(response: any) {
    let list:Array<any> = response["businesses"];
    if (response["total"] == 0) {

    } else {
      let index = Math.floor(Math.random() * list.length) + 1;
      console.log(index);
      this.selected = list[index];
      if (this.selected.name !== undefined) {
        this.name = this.selected.name;
      } else {
        this.name = this.selected.id;
      }
      this.address = this.selected.location.address1+" "+this.selected.location.address2+" "+
        this.selected.location.address3+", "+this.selected.location.city+", "
        +this.selected.location.state;

      for (let item of this.selected.categories) {
        this.keywords.push(item.title);
      }

      let travelmode;
      if (this.walking) {
        travelmode = "walking";
      } else {
        travelmode = "driving";
      }

      this.google_url = this.google.buildgoogleURL(this.latitude, this.longitude, this.address, travelmode);
      this.waze_url = this.google.buildwazeURL(this.latitude, this.longitude, this.address);
      this.uber_url = this.google.builduberURL(this.address);
    }
  }

}
