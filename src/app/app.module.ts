import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../app/config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { DatacontrolPage } from '../pages/datacontrol/datacontrol';
import { DetailPage } from '../pages/detail/detail';
import { RemovePage } from '../pages/remove/remove';
import { ViewDataPage } from '../pages/view-data/view-data';
import { AngularFireDatabaseModule } from 'angularfire2/database'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    DatacontrolPage,
    DetailPage,
    RemovePage,
    ViewDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    DatacontrolPage,
    DetailPage,
    RemovePage,
    ViewDataPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
