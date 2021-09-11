import { Component,ViewChild, ElementRef,NgZone}  from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import{Camera,CameraOptions} from '@ionic-native/camera';
import { FormControl, FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {MapsAPILoader} from "@agm/core";
import { } from 'googlemaps';
declare var google: any;
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
//import { Base64 } from '@ionic-native/base64';
//declare var google;
//let map: any;
//let infowindow: any;
//let options = {
  //enableHighAccuracy: true,
//  timeout: 5000,
  //maximumAge: 0
//};
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
name:string;
password:string;
phone:string;
email:string;
adresse:string;
coffe:any;
myphoto:any;
public latitude: number;
public longitude: number;
public searchControl: FormControl;
public zoom: number;
adr : any ;
//public searchControl: FormControl;
@ViewChild('map') mapElement: ElementRef;
  constructor(public nav: NavController,public athAuthProvider:AuthProvider,private camera:Camera, private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone ) {
                this.zoom = 6;
                this.latitude = 36.8189700;
                this.longitude = 10.1657900;

                //create search FormControl
                this.searchControl = new FormControl();
                this.mapsAPILoader.load().then(() => {
                    //  let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
                      let autocomplete = new google.maps.places.Autocomplete(this.adr, {
                        types: ["address"]
                      });
                      autocomplete.addListener("place_changed", () => {
                        this.ngZone.run(() => {
                          //get the place result
                          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                          //
                          //  //verify result
                          if (place.geometry === undefined || place.geometry === null) {
                            return;
                          }
                          //this.addresse= place.formatted_address
                          // //set latitude, longitude and zoom
                          this.latitude = place.geometry.location.lat();
                          this.longitude = place.geometry.location.lng();
                          this.zoom = 12;
                        });
                      });
                    });
                  }


  //set google maps defaults

takephoto(){
  const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 this.myphoto = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
}
//
getimage(){
const options: CameraOptions = {
  quality: 70,
 destinationType: this.camera.DestinationType.FILE_URI,
 sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
saveToPhotoAlbum:false
}

this.camera.getPicture(options).then((imageData) => {
//  imageData is either a base64 encoded string or a file URI
// If it's base64 (DATA_URL):
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
//  Handle error
});
}

cropImage(){
const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.FILE_URI,

  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  saveToPhotoAlbum:false,
  allowEdit:true,
 targetWidth:300,
 targetHeight:300
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 this.myphoto = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
//  Handle error
});
}
//uploadFile(){
  //let loader=this.loadingCtrl.create({
  //  content:"Uploading..."
  //});
 //loader.present();
  //const fileTransfer :FileTransferObject=this.transfer.create();
 //var random=Math.floor(Math.random * 100);
  //let options:FileUploadOptions={
//  fileKey:'photo',
  //chunkedMode:false,
//  httpMethod:"post",
// parmas:{
     //'name':this.name,
    //  'password':this.password,
    //'phone':this.phone,
  //  'email':this.email
//   }
 //}
  // mimetype:"image/jpeg",
  //  headers :[]

//  }
 //fileTransfer.upload('this.myphoto', 'http://localhost:5000/api/coffes/upload', options)
//   .then((data) => {
// alert("Success");
 //}, (err) => {
    // console.log(err);
  //  alert(err);
    //loader.dismiss();
     //this.presentToast(err);
  //});
//}
//initMap() {
  //navigator.geolocation.getCurrentPosition((location) => {
  //  console.log(location);
  //  map = new google.maps.Map(this.mapElement.nativeElement, {
  //    center: {lat: location.coords.latitude, lng: location.coords.longitude},
    //  zoom: 15
//    });
  //  let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            //types: ["address"]
        //  });
        //  autocomplete.addListener("place_changed", () => {
          //  this.ngZone.run(() => {
              //get the place result
          //    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

              //verify result
          //    if (place.geometry === undefined || place.geometry === null) {
                //return;
            //  }

              //set latitude, longitude and zoom
            //  this.latitude = place.geometry.location.lat();
            //  this.longitude = place.geometry.location.lng();
            //  this.zoom = 12;
          //  });
        //  });
  //  infowindow = new google.maps.InfoWindow();
    //var service = new google.maps.places.PlacesService(map);
  //  service.nearbySearch({
    //  location: {lat: location.coords.latitude, lng: location.coords.longitude},
  //    radius: 1000,
    //  type: ['store']
  //  }, (results,status) => {
    ///  if (status === google.maps.places.PlacesServiceStatus.OK) {
      //  for (var i = 0; i < results.length; i++) {
      //    this.createMarker(results[i]);
    //    }
    //  }
    //});
  //}, (error) => {
    //console.log(error);
///  var myplace = {lat: -33.8665, lng: 151.1956};
//}
//createMarker(place) {
  //var placeLoc = place.geometry.location;
//  var marker = new google.maps.Marker({
  //  map: map,
  //  position: placeLoc
//  });

//  google.maps.event.addListener(marker, 'click', function() {
  //  infowindow.setContent(place.name);
  //  infowindow.open(map, this);
  //});
//}
addcoffee(name,password,phone,email,adresse){

console.log(email)

     this.coffe={
      'name':name,
      'password':password,
      'phone':phone,
      'email':email,
      'adresse':adresse,

    }
    console.log(this.coffe);
    this.athAuthProvider.addcoffee(this.coffe).then(data=>{
      console.log(data);
      this.nav.push(LoginPage);
    })
  }

}
