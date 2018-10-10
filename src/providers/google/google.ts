import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleProvider {

  url_google:string = "https://www.google.com/maps/dir/?api=1";
  url_waze:string = "https://waze.com/ul";
  url_uber: string = "https://m.uber.com/ul/?client_id=Oiy2SXicn6VLi7SKvoEHXmb6th0y-1sW&action=setPickUp&pickup=my_location&";


  constructor() {
    console.log('Hello GoogleProvider Provider');
  }
  buildgoogleURL (latitude:number, longitude:number, destination:string, travelmode?:string) {
    let origin = encodeURI(latitude + "," + longitude);
    travelmode = encodeURI(travelmode);
    destination = encodeURI(destination);

    let url = this.url_google + "&origin=" + origin + "&destination=" + destination + "&travelmode=" + travelmode;

    return url;
  }
  buildwazeURL (latitude:number, longitude:number, destination:string) {
    let origin = encodeURI(latitude + "," + longitude);
    destination = encodeURI(destination);
    let url = this.url_waze + "?ll=" + origin + "?q=" + destination;
    console.log(this.url_waze);
    return url;
  }
  builduberURL (destination:string) {
    destination = encodeURI(destination);
    let url = this.url_uber+"dropoff[formatted_address]="+destination;
    return url;
  }
}
