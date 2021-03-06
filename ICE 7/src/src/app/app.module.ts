import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_INFO} from './firebase.info';
import { ImageProvider } from '../providers/image/image';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(FIREBASE_INFO),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageProvider,

  ]
})
export class AppModule {

}
