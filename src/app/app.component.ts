import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Config, Nav, Platform } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Filters', component: 'FilterPage' },
    { title: 'Home', component: 'HomePage' },
    { title: 'Result', component: 'ResultPage' }
  ];

  constructor(platform: Platform,
              statusBar: StatusBar, splashScreen: SplashScreen, private config: Config,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

