import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { YelpProvider } from '../providers/yelp/yelp';
import { GeoProvider } from '../providers/geo/geo';
import { HttpModule } from '@angular/http';
import { GoogleProvider } from '../providers/google/google';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YelpProvider,
    GeoProvider,
    AndroidPermissions,
    GoogleProvider
  ]
})
export class AppModule {}
