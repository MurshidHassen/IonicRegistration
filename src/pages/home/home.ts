import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { DatacontrolPage } from '../datacontrol/datacontrol';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;
  public datacontrol;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.datacontrol = DatacontrolPage;
  }

  signIn() {
    if (this.uname.value == "admin" && this.password.value == "admin") {
      
      let alert = this.alertCtrl.create({
        title: 'Login Successful!',
        subTitle: 'You are logged in',
        buttons: ['OK']
      });
      alert.present();
      
      this.navCtrl.push(this.datacontrol);
    }

    //this.navCtrl.push(this.datacontrol);

  }

  signUp() {

    this.navCtrl.push(RegisterPage);

  }

}
