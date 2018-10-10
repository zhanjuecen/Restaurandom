import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';

@Injectable()
export class YelpProvider {

  response:any;
  access_token:string = "Lvn4KzYJD5hYXR_X08yYLOOhOqyeckfi4MRclBt782QyJ87pzksNCXzSpLNaH4s2Wq3L_oMruI-oRD27uiwoQpQPxJECALT6AaNfDhrNbazg_dQ6LcDv0NDcaZnrWXYx";
  url:string = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

  constructor(public http: Http) {
    console.log('Hello YelpProvider Provider');
  }

  get (latitude:number, longitude:number, radius?: string, term?: string, price?:number) {
    let headers = new Headers();
    // headers.append('Authorization', btoa(this.access_token));
    headers.append('Authorization', "Bearer "+this.access_token);
    headers.append('X-Requested-With', 'application/xml');
    let myParams = new URLSearchParams();
    myParams.append('latitude', latitude.toString());
    myParams.append('longitude', longitude.toString());
    myParams.append('open_now',true.toString());

    myParams.append('limit','50');
    if (radius !== undefined) {
      myParams.append('radius', radius);
    }
    if (term !== undefined) {
      myParams.append('term', term);
    }
    if (price !== undefined) {
      myParams.append('price', price.toString());
    }

    let options = new RequestOptions({ headers: headers, params: myParams, method: RequestMethod.Get});


    return this.http.get(this.url, options);
      // .subscribe(
      // res => this.response = res.json(),
      // msg => console.error(`Error: ${msg.status} ${msg.statusText}`));

  }

}
