import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { CoffePage } from '../pages/coffe/coffe';
import { LoginPage } from '../pages/login/login';
import { UpdatePage } from '../pages/update/update';
import { AjoutPage } from '../pages/ajoutoffre/ajout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AddPage } from '../pages/addcoffee/add';
import{Camera} from '@ionic-native/camera';
import { CommentsProvider } from '../providers/comments/comments';
import { OffersProvider } from '../providers/offers/offers';
import { ProfileProvider } from '../providers/profile/profile';
import {  FormsModule,ReactiveFormsModule } from "@angular/forms";
import {CommentPage} from '../pages/comments/comment';
import { AgmCoreModule ,MapsAPILoader}  from '@agm/core';
//import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
//import { Base64 } from '@ionic-native/base64';

@NgModule({
  declarations: [
    MyApp,
    CoffePage,
     LoginPage,
     AjoutPage,
     UpdatePage,
     AddPage,
     CommentPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBphqa5zKQkQ8Xuk_TFbfM2XuiafUdmKdU",
      libraries: ["places"]
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CoffePage,
   LoginPage,
   AjoutPage,
    UpdatePage,
    AddPage,
    CommentPage
   ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CommentsProvider,
    OffersProvider,
    ProfileProvider

  ]
})
export class AppModule {}
