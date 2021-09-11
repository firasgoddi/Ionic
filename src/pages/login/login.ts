import {Component, NgModule } from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import { AddPage } from '../addcoffee/add';
import{ CoffePage } from '../coffe/coffe';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,public athAuthProvider:AuthProvider) {
    this.menu.swipeEnable(false);

  }

  // go to register page
  register() {
  this.nav.push(AddPage);
  }



  // login and go to home page
  login(email,password) {
this.athAuthProvider.login(email,password).subscribe(
  res=>{
    console.log(res);
localStorage.setItem('token' , res['token']);
   console.log(JSON.parse(JSON.stringify(res)).success)

   if(JSON.parse(JSON.stringify(res)).success) {
this.nav.push(CoffePage , {id:  JSON.parse(JSON.stringify(res)).data['_id']});

  } else {

    alert('okkkkk')
  }

  })

  }


}
