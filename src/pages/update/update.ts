import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { OffersProvider } from '../../providers/offers/offers';
@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {
offre:any;
text:string;
id:any;
  constructor(public navCtrl: NavController,public offreProvider:OffersProvider, public navParams: NavParams) {
 this.id= this.navParams.get('id');
 console.log(this.id);
  }

modifier(text){
  this.offre={
   'text':text,
 }
 console.log(this.offre);
 this.offreProvider.modifier(this.id,this.offre).then(data=>{
   console.log(data);

 })
}
}
