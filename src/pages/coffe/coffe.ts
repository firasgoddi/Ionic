import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { AjoutPage } from '../ajoutoffre/ajout';
import { UpdatePage } from '../update/update';
import { OffersProvider } from '../../providers/offers/offers';
@Component({
  selector: 'page-coffe',
  templateUrl: 'coffe.html'
})
export class CoffePage {
offres:any[]=[];
offres2:any;
id:any;
adresse:any;
phones:any;
opening:any;
closing:any;
	establish:any;
nomcoffe:any;
  constructor(public navCtrl: NavController,public navParams: NavParams,public offreProvider:OffersProvider) {
    this.id=this.navParams.get('id');
    console.log(this.id);
this.getalloffers() ;

this.getallcoffees();

  }

nextpage(){
  this.navCtrl.push(AjoutPage);
}
nxtpage(id){
  this.navCtrl.push(UpdatePage ,{'id' : id});
}

getalloffers(){
  console.log(this.id);
  this.offreProvider.getalloffers().then(data=>{
    console.log(data['data'][0]);
for(var i=0 ; i< data.data[0].length ; i++){

 if(data.data[0][i]._id === this.id){
   this.offres.push(data.data[0][i].offres)
 }
}

console.log(this.offres);
this.offres2=this.offres[0];
console.log(this.offres2);

  })
}
getallcoffees(){
  console.log(this.id);
  this.offreProvider.getallcoffees().then(data=>{
    console.log(data);

for(var i=0 ; i<data.data.length ; i++){
  console.log(this.id);
    console.log(data.data[0]._id);
if( data.data[i]._id === this.id){

   this.nomcoffe=data.data[i].name;
    this.phones=data.data[i].phone;
  this.opening=data.data[i].opening_hour;
this.closing=data.data[i].closing_hour;
this.establish=data.data[i].established;


}


}

console.log(this.nomcoffe);
console.log(this.phones);


})

}

}
