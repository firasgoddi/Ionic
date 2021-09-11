import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OffersProvider } from '../../providers/offers/offers';
import { CoffePage } from '../coffe/coffe';
//import{Camera,CameraOptions} from '@ionic-native/camera';
@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html'
})
export class AjoutPage {
text:string;
offre:any;
  constructor(public navCtrl: NavController,public offreProvider:OffersProvider) {

}
  //takephoto(){
    //const options: CameraOptions = {
  //  quality: 70,
    //destinationType: this.camera.DestinationType.FILE_URI,
  //  encodingType: this.camera.EncodingType.JPEG,
  //  mediaType: this.camera.MediaType.PICTURE
  //}

  //this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
//   this.myphoto = 'data:image/jpeg;base64,' + imageData;
//  }, (err) => {
   // Handle error
//  });
//  }
//  //
//  getimage(){
//  const options: CameraOptions = {
//    quality: 70,
//   destinationType: this.camera.DestinationType.FILE_URI,
  // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //saveToPhotoAlbum:false
  //}

//  this.camera.getPicture(options).then((imageData) => {
  //  imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):
  // let base64Image = 'data:image/jpeg;base64,' + imageData;
  //}, (err) => {
  //  Handle error
  //});
//  }

  //cropImage(){
  //const options: CameraOptions = {
  //  quality: 70,
  //  destinationType: this.camera.DestinationType.FILE_URI,

  //  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //saveToPhotoAlbum:false,
  //  allowEdit:true,
  // targetWidth:300,
//   targetHeight:300
//  }

  //this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
//   this.myphoto = 'data:image/jpeg;base64,' + imageData;
//  }, (err) => {
  //  Handle error
  //});
//}//
  addoffer(text){
       this.offre={
        'text':text,
      }
      console.log(this.offre);
      this.offreProvider.addoffer(this.offre).then(data=>{
        console.log(data);
      this.navCtrl.setRoot(CoffePage , {id : data['data']['coffe']});
      })
    }
}
