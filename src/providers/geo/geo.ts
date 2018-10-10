import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

@Injectable()
export class GeoProvider {

  latitude: number;
  longitude: number;
  city: string;

  constructor(public http: Http, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder)  {
    this.subscribe();
    console.log('GeoProvider Provider Initiated');
  }

  getCurrent() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude})
      .catch((error) => {
      console.log('Error getting location', error);
    });
  }

  subscribe() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      if (data.coords!== undefined){
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      }
    });
  }

  getcity(latitide: number, longitude: number){
    this.nativeGeocoder.reverseGeocode(latitide, longitude)
      .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
      .catch((error: any) => console.log(error));
  }

}
