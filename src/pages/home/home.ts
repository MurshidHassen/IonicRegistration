import { Component, ViewChild } from '@angular/core';
import { NavController , AlertController} from 'ionic-angular';

import{RegisterPage} from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn(){
    if(this.uname.value=="admin" && this.password.value=="admin"){
      let alert = this.alertCtrl.create({
        title: 'Login Successful!',
        subTitle: 'You are logged in',
        buttons: ['OK']
      });
      alert.present();

    }

   
    
  }

  signUp(){

    this.navCtrl.push(RegisterPage);
    
  }

}
